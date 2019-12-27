var fs = require('fs') 

function addController(router,dir){
    const files = fs.readdirSync(__dirname + dir)
    const jsFiles = files.filter(f => {
        return f.endsWith('.js')
    })
    for (const f of jsFiles){
        let links = require(__dirname + dir + f)
        addRoutes(router,links)
    }
}

function addRoutes(router,links){
    for (url in links){
        if(url.startsWith('GET')){
            const path = url.substring(4)
            router.get(path,links[url])
        } else if (url.startsWith('POST')) {
            const path = url.substring(5)
            router.post(path,links[url])
        } else {
            console.log('无效链接')
        }
    }
}

module.exports = function(dir){
    let controller_dir = dir || '/controller/' 
    var router = require('koa-router')()
    addController(router,controller_dir)
    return router.routes()
}