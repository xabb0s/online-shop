const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();


function allProducts() {
  return client.product.findMany()
}

function findProductByCategory(cid) {
  return client.product.findMany({
    where: {
      c_id: cid
    }
  })
}

function createProduct(name, about, price, cid) {
  return client.product.create({
    data: {
      name,
      about,
      price,
      c_id: cid
    }
  })
}

function updateProduct(id, name, about, price, cid) {
  return client.product.update({
    data: {
      name,
      about,
      price,
      c_id: cid
    },
    where: {
      id
    }
  })
}

function deleteProduct(id) {
  return client.product.delete({
    where: {
      id
    }
  })
}

module.exports = {
  allProducts,
  findProductByCategory,
  createProduct,
  updateProduct,
  deleteProduct
}