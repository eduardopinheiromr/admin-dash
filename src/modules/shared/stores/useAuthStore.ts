import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {userLogin} from '@modules/auth/services/userLogin'
import {processAuthTokens} from '@shared/utils/processAuthTokens'
import {microsoftSSOLogin} from '@modules/auth/services/microsoftSSO'

type AuthStore = {
  session?: Pick<DecodedToken, 'exp' | 'iat'> & User
  token?: string
  refreshToken?: string
  organization?: Organization
  organizations?: Organization[]
  hasValidSession: () => boolean
  signOut: (redirect?: string) => void
  signIn: (credentials: Credentials) => Promise<void | any>
  isAdmin: () => boolean
  signInMicrosoftSSO: (
    microsoftCredentials: MicrosoftSSOCredentials,
  ) => Promise<void | any>
  set: (session: Partial<AuthStore>) => void
}

const initialState: Partial<AuthStore> = {
  session: undefined,
  token: undefined,
  refreshToken: undefined,
}

const parseRedirect = (redirect?: string) => {
  if (!redirect || redirect === '/') return ''

  const query = '?redirect='

  if (redirect && redirect.includes('[')) {
    const correctPath = redirect?.split('/')[0]

    return query + correctPath
  }

  return query + redirect
}

export const useAuthStore = create(
  persist<AuthStore>(
    (set, get) => {
      return {
        ...initialState,
        getSession: () => {
          const session = get().session
          if (session) {
            if (session.exp < Date.now()) {
              return undefined
            }
            return session
          }
        },
        hasValidSession: () => {
          const session = get().session

          if (!session) {
            return false
          }
          if (session.exp < Date.now()) {
            // set({...initialState})
            return false
          }
          return true
        },
        signIn: async credentials => {
          // const {toast} = createStandaloneToast()
          const authTokens = await userLogin(credentials)
          await processAuthTokens(authTokens)
        },
        signInMicrosoftSSO: async microsoftCredentials => {
          const authTokens = await microsoftSSOLogin(microsoftCredentials)
          await processAuthTokens(authTokens)
        },
        signOut: (redirect?: string) => {
          window.location.href = '/' + parseRedirect(redirect)
          // localStorage.clear()
          // set({...initialState})
          localStorage.clear()
        },
        isAdmin: () => get().organization?.role === 'admin',
        set: (data: Partial<AuthStore>) => set({...data}),
      }
    },
    {
      name: 'auth-storage', // unique name
    },
  ),
)
