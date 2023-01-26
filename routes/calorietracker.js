const express = require("express");
const router = express.Router();
const calorieControllers = require("../controllers/calorietracker")

// router.get('/', calorieControllers.all);
router.get('/', calorieControllers.list);
router.get('/:id', calorieControllers.show);
router.post('/', calorieControllers.create);
router.put('/:id', calorieControllers.update);
router.delete('/:id', calorieControllers.remove);

module.exports = router;
