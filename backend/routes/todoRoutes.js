const express = require("express");
const router = express.Router();
const {getTodos, addTodo, deleteTodo, getAISuggestion} = require('../controllers/todoController');


router.get('/', getTodos);
router.get('/suggest', getAISuggestion);
router.post('/', addTodo);
router.delete('/:id', deleteTodo);


module.exports = router;
