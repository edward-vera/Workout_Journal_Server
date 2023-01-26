const express = require("express");
const router = express.Router();
const muscleTargetsControllers = require("../controllers/muscleTargets")

// router.get('/', muscleTargetsControllers.all);
router.get('/', muscleTargetsControllers.list);
router.get('/:id', muscleTargetsControllers.show);
router.post('/', muscleTargetsControllers.create);
router.put('/:id', muscleTargetsControllers.update);
router.delete('/:id', muscleTargetsControllers.remove);

module.exports = router;