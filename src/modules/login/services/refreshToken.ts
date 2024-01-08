import api from '@shared/services/api'
import {useAuthStore} from '@shared/stores/useAuthStore'
import {processAuthTokens} from '@shared/utils/processAuthTokens'

export const refreshToken = async (): Promise<string> => {
  const state = useAuthStore.getState()

  try {
    const {data} = await api.post('/auth/web/refresh', {
      refreshToken: state.refreshToken,
    })
    await processAuthTokens(data)
    return data.accessToken
  } catch (e) {
    if (e.response.status === 401) {
      await state.signOut()
    }
  }
}
