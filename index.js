const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

require('dotenv/config')

const model = require('./models/index')
const pessoas = require('./routes/pessoas')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => res.render('index'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/pessoas', pessoas)

const forceReBuiilDB = false;
model.sequelize.sync({ force: forceReBuiilDB }).then(() => {
    const port = process.env.PORT || 3000
    const webLink = 'http://localhost'
    app.listen(port, () => console.log(`\nApp is run in ${webLink}:${port}\n`))
})