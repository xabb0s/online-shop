const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();


function allCategories() {
  return client.category.findMany()
}

function createCategory(name) {
  return client.category.create({
    data: {
      name: name
    }
  })
}

function updateCategory(id, name) {
  return client.category.update({
    data: {
      name
    },
    where: {
      id
    }
  })
}

function removeCategory(id) {
  return client.category.delete({
    where: {
      id
    }
  })
}

module.exports = {
  allCategories,
  createCategory,
  updateCategory,
  removeCategory
}