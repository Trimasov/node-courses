const express = require('express')
const path = require('path')
const exphbr = require('express-handlebars')
const { extname } = require('path')
const HomeRouter = require('./routes/home')
const cardRouters = require('./routes/card')
const AddRoutes = require('./routes/add')
const CoursesRoutes = require('./routes/courses')

const PORT = process.env.PORT || 3001
const app = express()

const hbs = exphbr.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use('/', HomeRouter)
app.use('/add', AddRoutes)
app.use('/courses', CoursesRoutes)
app.use('/card', cardRouters)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})