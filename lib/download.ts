/** Downloads a file as `filename`, falling back to opening it in a new tab. */
export async function downloadFile(url: string, filename: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const objectUrl = URL.createObjectURL(await response.blob())
    const anchor = document.createElement('a')
    anchor.href = objectUrl
    anchor.download = filename
    anchor.click()
    URL.revokeObjectURL(objectUrl)
  } catch {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

/** Builds a download filename from a title, keeping the extension of `url`. */
export function toFilename(title: string, url: string) {
  const extension = url.split('?')[0].split('.').pop() ?? 'png'
  return `${title}.${extension}`
}
