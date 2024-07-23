export const getData = async <T>(
  endpoint: string,
  options: {
    cache?: 'force-cache' | 'no-store'
    revalidate?: 0 | false | number
  } = {}
): Promise<T | null> => {
  const { cache, revalidate } = options

  try {
    const response = await fetch(endpoint, { cache, next: { revalidate } })

    if (!response.ok) {
      throw new Error('Response was not ok')
    }
    return await response.json()
  } catch (reason) {
    if (reason instanceof Error) {
      console.error(reason.message)
    }

    return null
  }
}
