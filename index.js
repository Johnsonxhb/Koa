var Koa = require('koa')

var app = new Koa()

var bodyParser = require('koa-bodyparser');



// 载入模板渲染器

const template = require('./template.js')
app.use(template('views',{noCache:true,watch:true}))

app.use(bodyParser())

// 处理静态文件
const staticFiles = require('./static.js')
app.use(staticFiles('/static/'))

// 载入控制器
const controller = require('./controller.js')
app.use(controller())

app.listen(8000)
console.log('app started at port 3000...');

// nunjucks
//转义（防止脚本注入） 格式化（展示方式格式化） 简单逻辑