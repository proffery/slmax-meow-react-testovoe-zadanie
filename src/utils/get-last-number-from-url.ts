export const getLastNumberFromUrl = (url: string): string => {
  const parts = url.split('/')
  return parts[parts.length - 1]
}
