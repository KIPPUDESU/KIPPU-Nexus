# KIPPU NEXUS

> 当前项目仅为骨架
> 后续想要引入tailwindcss完成样式编辑、美化

---

后端接入Google Books的API，以此完成功能实现，主要专注于前端
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
## Setup
开发使用依赖包pnpm
```bash
# pnpm
pnpm install
```
开发启动推荐
```bash
# pnpm
pnpm dev
pnpm run dev
```


好崩溃啊tailwindcss还是不太适应  
整了好久问ai，编辑不明白，还得多花点时间  
~~但是还是挺喜欢这种组件编辑方式的，感觉完全掌握以后写起来肯定很爽~~  

### 05.5.19
### 今天本来准备做好主题切换功能的  
但是发现好像并灭有那么好实现  
添加的dark直接就生效了，点击按钮以后暂时也没有切换成原来的颜色  
~~再研究研究吧，今天没法写了~~

### 05.5.20
### 在haruki的帮助下解决了头疼的问题
现在终于是有点模样了  
**说起来刚刚写日期的适合才突然意识到今天是什么日子**

### 05.5.21
### 把早上突发奇想的网页切换方式加到里面来了，虽然有点bug但是效果也不算差
把搜索框样式也优化了  

在haruki的推荐下稍微学到了新的方式，所以利用上课时间整理了一点东西
[VueUse](https://www.notion.so/UesDark-1f9dfa5db3b980e18f8fd141092c823a?pvs=4)

![KIPPU](./images/kippu.png)