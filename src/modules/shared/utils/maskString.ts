export const maskString = (string: string, mask: string) => {
  if (!string || string.length === 0) return ''
  let result = ''
  let index = 0
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === 'X') {
      result += string[index] || ''
      index++
    } else {
      result += mask[i]
    }
  }
  return result
}
