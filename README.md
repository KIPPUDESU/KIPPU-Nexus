## KIPPU NEXUS

> 当前项目仅为骨架
> 后续想要引入tailwindcss完成样式编辑、美化

---

后端接入Google Books的API，以此完成功能实现，主要专注于后端
```ts
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
```

![KIPPU](./images/kippu.png)

好崩溃啊tailwindcss还是不太适应
整了好久问ai，编辑不明白，还得多花点时间
~~但是还是挺喜欢这种组件编辑方式的，感觉完全掌握以后写起来肯定很爽~~