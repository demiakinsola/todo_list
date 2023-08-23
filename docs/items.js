const getList = {
  tags: ["Items"],
  description: "Get all the items on the todo list",
  operationId: "list",
  responses: {
    "200": {
      description: "List gotten successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              _id: {
                type: "string",
                example: "60564fcb544047cdc3844818",
              },
              item: {
                type: "string",
                example: "read my Bible",
              },
            },
          },
        },
      },
    },
    "404": {
      description: "Not Found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Not Found",
              },
            },
          },
        },
    },
    "500": {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
},
};

const addItem = {
  tags: ["Items"],
  description: "Add a new item to the list",
  operationId: "add",
  requestBody: {
    content: {
      "application/json": {
        schema: {
            type: 'object',
            properties: {
                item: {
                    type: 'string',
                    example: 'do some exercise'
                }
            }
        },
      },
    },
    required: true,
  },
  responses: {
    "200": {
      description: "Item added successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              _id: {
                type: "string",
                example: "60564fcb544047cdc3844818",
              },
              item: {
                type: "string",
                example: "read my Bible",
              },
            },
          },
        },
      },
    },
  "404": {
    description: "Not Found",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Not Found",
            },
          },
        },
      },
    },
    "500": {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
}
};

const deleteItem = {
  tags: ["Items"],
  description: "Delete an item",
  operationId: "delete",
  parameters: [
    {
      name: "item",
      in: "path",
      description: "Name of item",
      required: true,
      schema: {
        type: "string",
      },
    },
  ],
  responses: {
    200: {
      description: "Item deleted successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              _id: {
                type: "string",
                example: "60564fcb544047cdc3844818",
              },
              acknowledged: "boolean",
              deletedCount: "integer",
            },
          },
        },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Item not found on the list.",
              },
            },
          },
        },
      },
      500: {
        description: "Internal Server Error",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Internal Server Error",
                },
              },
            },
          },
        },
      },
    },
  },
}; 

module.exports = { getList, addItem, deleteItem };
