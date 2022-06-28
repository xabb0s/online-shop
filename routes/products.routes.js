const { Router } = require("express")
const { allProducts, findProductByCategory, createProduct, updateProduct, deleteProduct } = require("../services/products.service.js")
const { handleError } = require("./util.js")

const router = Router()

router.get('/', (req, res) => {
  allProducts()
    .then(products => res.json(products))
    .catch(err => handleError('All Products', err, res))
})

router.get('/:cid', (req, res) => {
  findProductByCategory(+req.params.cid)
    .then(products => res.json(products))
    .catch(err => handleError('Products by Category', err, res))
})

router.post('/', (req, res) => {
  const { name, about, price, cid } = req.body
  createProduct(name, about, price, cid)
    .then(products => res.json(products))
    .catch(err => handleError('Create Product', err, res))
})

router.put('/:id', (req, res) => {
  const { name, about, price, cid } = req.body
  const id = +req.params.id
  updateProduct(id, name, about, price, cid)
    .then(products => res.json(products))
    .catch(err => handleError('Update Product', err, res))
})

router.delete('/:id', (req, res) => {
  const id = +req.params.id
  deleteProduct(id)
    .then(products => res.json(products))
    .catch(err => handleError('Delete Product', err, res))
})

module.exports = router