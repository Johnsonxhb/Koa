const path = require('path')
const mime = require('mime')
const fs = require('fs')
function staticFiles(url){
    return async (ctx,next) => {
        let rpath = ctx.request.path
        if(rpath.startsWith(url)) {
            let fp = path.join(__dirname + rpath)
            if(fs.existsSync(fp)){
                ctx.response.type = mime.getType(fp)
                let body = fs.readFileSync(fp)
                ctx.response.body = body
            } else {
                ctx.response.status = 404
            }
        } else {
            await next()
        }
    }
}

module.exports = staticFiles