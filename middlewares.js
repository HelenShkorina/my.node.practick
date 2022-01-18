const colors = require('colors')

function requestTime(req, res, next) {
    req.requestTime = Date.now()
    next()
}

function logger(req, res, next) {
    console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`))
    next()
}


module.exports = requestTime
module.exports = logger