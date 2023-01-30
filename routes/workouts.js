const express = require("express");
const router = express.Router();
const workoutsControllers = require("../controllers/workouts")

router.get('/', workoutsControllers.all);
// router.get('/', workoutsControllers.list);
router.get('/:id', workoutsControllers.show);
router.post('/', workoutsControllers.create);
router.put('/:id', workoutsControllers.update);
router.delete('/:id', workoutsControllers.remove);

module.exports = router;