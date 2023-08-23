const { getList, addItem, deleteItem } = require('./items')

const apiDocumentation = {
  openapi: "3.0.1",
  info: {
    version: "1.3.0",
    title: "My todo list REST API - Documentation",
    description: "An api that helps users manage a todo list",
    contact: {
      name: "Oluwademilade Akinsola",
      email: "oluwademiladeakinsola@gmail.com"
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local Server",
    },
    {
      url: "",
      description: "Production Server",
    },
  ],
  tags: [
    {
      name: "Items",
    },
  ],
  paths: {
    '/list': {
      get: getList,
    },
    '/add': {
        post: addItem
    },
    '/delete/{item}': {
        delete: deleteItem,
    }
  },
};

module.exports = { apiDocumentation };
