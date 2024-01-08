import api from '@shared/services/api'

type Response = {
  accessToken: string
  refreshToken: string
}

export const userLogin = async (
  credentials: Credentials,
): Promise<Response> => {
  const {data} = await api.post('/auth/web/token', credentials)

  return data
}
