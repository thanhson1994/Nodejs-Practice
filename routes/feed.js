const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

router.get('/api/v1/todos', feedController.getTodos);

router.get('/api/v1/edit-todo/:id', feedController.getEditTodo);


router.post('/api/v1/create-todos', feedController.createTodos);

module.exports = router;