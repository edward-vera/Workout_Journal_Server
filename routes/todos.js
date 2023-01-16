const express = require("express");
const router = express.Router();
const todosControllers = require("../controllers/todos")

router.get('/', todosControllers.list);
router.get('/:id', todosControllers.show);
router.post('/', todosControllers.create);
router.put('/:id', todosControllers.update);
router.delete('/:id', todosControllers.remove);

module.exports = router;
