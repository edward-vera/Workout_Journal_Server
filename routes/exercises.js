const express = require("express");
const router = express.Router();
const exercisesControllers = require("../controllers/exercises")

// router.get('/', exercisesControllers.all);
router.get('/workout/:id', exercisesControllers.list);
router.get('/:id', exercisesControllers.show);
router.post('/', exercisesControllers.create);
router.put('/:id', exercisesControllers.update);
router.delete('/:id', exercisesControllers.remove);

module.exports = router;