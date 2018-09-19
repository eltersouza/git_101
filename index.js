// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const port = 3000

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
    response.render('home', {
        name: 'John'
    })
})

app.get('/elter', (request, response) => {
    response.render('elter', {})
})

app.use('/static', express.static('public'))

app.use((err, request, response, next) => {
    // log the error, for now just console.log
    console.log(err)
    response.status(500).send('Something broke!')
})

app.listen(port, (hr) =>{
    if(hr){
        console.log("Something bad happened.", hr);
    }
    
    console.log("Init ExpressJS.")
    console.log(`Listening in the port ${port}`);
});