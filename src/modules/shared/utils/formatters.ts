export const formatDate = (date?: string) => {
  if (!date) return ''
  if (date.includes('T')) {
    const [dateOnly] = date.split('T')
    const [year, month, day] = dateOnly.split('-')

    return `${day}/${month}/${year}`
  }

  return new Date(date + ':').toLocaleDateString('pt-BR')
}

export const formatTime = (date?: string) => {
  if (!date) return ''
  if (date.includes('T')) {
    const dateObj = new Date(date)

    return dateObj.toLocaleTimeString('pt-BR').slice(0, 5)
    // const [_, timeOnly] = date.split('T')
    // const [hour, minute] = timeOnly.split(':')

    // return `${hour}:${minute}`
  }

  return new Date(date + ':').toLocaleTimeString('pt-BR')
}

export const formatDateToInput = (date?: string) => {
  if (!date) return ''
  if (date.includes('T')) {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString('pt-BR')
    // const [dateOnly] = date.split('T')
    // const [year, month, day] = dateOnly.split('-')

    // return `${year}-${month}-${day}`
  }
}

export const formatMoney = (value: number) => {
  if (!value) return ''
  return value?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export const formatBytes = (size: number) => {
  const KILOBYTES = 1024
  const MEGABYTES = 1024 * KILOBYTES
  // if is MB, return the size in MB
  if (size >= MEGABYTES) return `${(size / MEGABYTES).toFixed(2)} MB`
  // if is KB, return the size in KB
  if (size >= KILOBYTES) return `${(size / KILOBYTES).toFixed(2)} KB`
  // if less than KB, return the size in bytes
  return `${size} bytes`
}
