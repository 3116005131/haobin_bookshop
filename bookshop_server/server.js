let Koa = require('koa')
let KoaRouter = require('koa-router')
let Fly = require('flyio/src/node')
let fly = new Fly()
let jwt = require('jsonwebtoken')

const app = new Koa()
const router = new KoaRouter()

router.get('/', (ctx, next) => {
  ctx.body = '服务器返回的数据'
})

let datas = require('./datas/data')
router.get('/searchBooks', (ctx, next) => {
  let req = ctx.query.req
  console.log(req)
  let booksArr = datas
  ctx.body = booksArr
})

router.get('/getOpenId', async (ctx, next) => {
  let code = ctx.query.code
  let appId = 'wxc26df4dd6a2879b7'
  let appSecret = '3e5c71e3c83816a926f37565a709c03e'
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  let result = await fly.get(url)
  let userInfo = JSON.parse(result.data)
  let token = jwt.sign(userInfo, 'duanhaobin')
  console.log(token)
  ctx.body = token
})
router.get('/test', (ctx, next) => {
  console.log(ctx.request.header.authorization)
  let token = ctx.request.header.authorization
  let result
  try {
    result = jwt.verify(token, 'duanhaobin')
    console.log('验证结果', result)
    ctx.body = '验证成功!'
  } catch (e) {
    ctx.body = '验证失败'
  }
})
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen('3000', () => {
  console.log('服务器启动成功')
  console.log('服务器地址：http://localhost:3000')
})
