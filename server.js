const express = require("express")
const cors = require("cors")

const categoriesRoutes = require('./routes/categories.routes.js')
const productsRoutes = require('./routes/products.routes.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/categories', categoriesRoutes)
app.use('/products', productsRoutes)

app.listen(8080, () => {
  console.log('app listening on port: 8080')
})