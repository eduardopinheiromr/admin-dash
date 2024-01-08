export const urlParamsToObj = (url: string) => {
  const params = url.split('?')[1]
  if (!params) return {}
  const paramsArray = params.split('&')
  const paramsObj: any = {}
  paramsArray.forEach(param => {
    const [key, value] = param.split('=')
    paramsObj[key] = value
  })
  return paramsObj
}
