import { createServer } from 'http';
import { parse } from 'url'
import { randomUUID } from 'crypto';

const PORT = 3000
async function handler(req, res) {
  if (req.method === "GET" &&
    req.url.includes('products')
  ) {
    const { query: { productName } } = parse(req.url, true)
    const result = {
      id: randomUUID(),
      product: productName
    }
    console.log(result)
    const asdf = await (async () => new Promise(resolveInner => setTimeout(resolveInner, 1000)))()
    return res.end(JSON.stringify(result))
  }
  return res.end('hello')
}
createServer(handler).listen(PORT, () => console.log(`server is running on ${PORT}`))