const { Router } = require('express')
const { allCategories, createCategory, removeCategory, updateCategory } = require('../services/categories.service.js')
const { handleError } = require('./util.js')

const router = Router()

router.get('/', (req, res) => {
  allCategories()
    .then(categories => res.json({
      message: 'All Categories',
      categories
    }))
    .catch(err => handleError('All Categories', err, res))
})

router.post('/', (req, res) => {
  const { name } = req.body
  createCategory(name)
    .then(categories => res.json(categories))
    .catch(err => handleError('Create Category', err, res))
})

router.put('/:id', (req, res) => {
  const { name } = req.body
  const id = req.params.id
  updateCategory(id, name)
    .then(categories => res.json(categories))
    .catch(err => handleError('Update Category', err, res))
})

router.delete('/:id', (req, res) => {
  removeCategory(+req.params.id)
    .then(category => res.json(category))
    .catch(err => handleError('Delete Category', err, res))
})

module.exports = router