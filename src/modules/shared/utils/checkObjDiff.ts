export const checkObjDiff = (
  obj1: Record<string, any>,
  obj2: Record<string, any>,
) => {
  const diff: Record<string, any> = {}

  Object.keys(obj1).forEach(key => {
    if (obj1[key] !== obj2[key]) {
      diff[key] = obj1[key]
    }
  })

  return diff
}
