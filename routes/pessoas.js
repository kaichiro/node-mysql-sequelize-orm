const express = require('express')
const router = express.Router()
const {
    createForm,
    createProcess,
    deleteOne,
    index,
    editForm,
    editProcess,
} = require('../controllers/pessoas')

const model = require('../models/index')

router.get('/', index.bind(null, model.models))

router.post('/create', createProcess.bind(null, model.models))
router.get('/create', createForm)

router.get('/delete/:id', deleteOne.bind(null, model.models))

router.post('/edit/:id', editProcess.bind(null, model.models))
router.get('/edit/:id', editForm.bind(null, model.models))

module.exports = router