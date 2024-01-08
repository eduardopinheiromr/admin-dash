export const slugify = (text?: string) => {
  if (!text) return ''
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}
