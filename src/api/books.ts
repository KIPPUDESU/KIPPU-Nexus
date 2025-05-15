interface GBItem { id: string; volumeInfo: any }
interface Book { id: string; title: string; authors: string[]; thumbnail: string }

export async function fetchBooks(type: string, keyword: string): Promise<{ total: number; books: Book[] }> {
  const q = `${type}:${encodeURIComponent(keyword)}`
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=20`)
  if (!res.ok) throw new Error('网络错误')
  const data = await res.json() as { totalItems: number; items: GBItem[] }
  const books = (data.items || []).map(item => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors || ['未知'],
    thumbnail: item.volumeInfo.imageLinks?.thumbnail || ''
  }))
  return { total: data.totalItems, books }
}
