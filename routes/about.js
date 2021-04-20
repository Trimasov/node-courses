const {Router} = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', (req, res) => {
    res.render('about', {
        title:'О нас',
        isAbout: true
    })
})

module.exports = router