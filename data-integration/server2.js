import { createServer } from 'http';

const PORT = 4000
async function handler(req, res) {
  if (req.method === "POST" &&
    req.url.includes('cart')
  ) {
    for await (const data of req) {
      const item = JSON.parse(data)
      console.log(item)
      const asdf = await (async () => new Promise(resolveInner => setTimeout(resolveInner, 1000)))()

      return res.end(`process succeded for ${item.id}`)
    }
  }
  return res.end('hello')
}
createServer(handler).listen(PORT, () => console.log(`server is running on ${PORT}`))