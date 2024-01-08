import {getConfig} from '@modules/config/services/getConfig'
import {getUser} from '@shared/services/getUser'
import {getUserOrganizations} from '@shared/services/getUserOrganizations'
import {useAuthStore} from '@shared/stores/useAuthStore'
import jwt_decode from 'jwt-decode'

export const processAuthTokens = async ({accessToken, refreshToken}) => {
  const {set, organization, session} = useAuthStore.getState()
  // O tratamento de multiplicar por 1000 está sendo aplicado, pois o Date.time está chegando do back em segundos, não em milisegundos
  const {exp, iat, sub} = jwt_decode(accessToken) as DecodedToken

  const data = organization
    ? undefined
    : await Promise.all([
        getUser({userId: sub, token: accessToken}),
        getUserOrganizations({userId: sub, token: accessToken}),
      ])

  set({
    refreshToken,
    token: accessToken,
    session: {
      ...session,
      exp: exp * 1000,
      iat: iat * 1000,
      ...(!data ? {} : data[0]),
    },
    ...(!data ? {} : {organization: data[1][0], organizations: data[1]}),
  })
}
