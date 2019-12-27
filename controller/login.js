var fn_index = async (ctx, next) => {
    ctx.render('index.html')
}

var login = async (ctx,next) => {
    const name = ctx.request.body.name || ''
    const password = ctx.request.body.password || ''
    if(name == 'koa' && password == 'admin'){
        ctx.render('loginSuccess.html',{name:name})
    } else {
        ctx.render('loginFail.html',{name:name})
    }
}

module.exports = {
    'GET /':fn_index,
    'POST /login':login
}