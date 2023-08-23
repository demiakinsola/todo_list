const express = require('express');
const router = express.Router();
const { getList, addItem, deleteItem } = require('../controller/todoController');

router.get('/list', getList)
    .post('/add', addItem)
    .delete('/delete/:item', deleteItem);


module.exports = router;