const express = require('express')
const path =  require('path')
const requestTime = require('./middlewares')
const logger = require('./middlewares')
const serverRoutes = require('./routes/servers')

const app = express()
//const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
console.log (app.get('views'))

app.use(express.static(path.resolve(__dirname,'static',)))
app.use(requestTime)
app.use(logger)

app.use(serverRoutes)

app.get('/', (req, res) => {
    res.render('index', {title: 'Main Page', active: 'main'})
})
app.get('/features', (req, res) => {
    res.render('features', {title: 'Features Page', active: 'features'})
})


// app.get('/', (req, res) => {
    //res.send('<h1>Hello Express</h1>')
    // res.sendFile(path.resolve(__dirname,'static', 'index.html'))
// })

// app.get('/download', (req, res) => {

    // res.download(path.resolve(__dirname,'static', 'features.html'))
// })

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})
