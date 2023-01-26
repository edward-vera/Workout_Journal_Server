const express = require("express");
const router = express.Router();
const equipmentListControllers = require("../controllers/equipmentList")

// router.get('/', equipmentListControllers.all);
router.get('/', equipmentListControllers.list);
router.get('/:id', equipmentListControllers.show);
router.post('/', equipmentListControllers.create);
router.put('/:id', equipmentListControllers.update);
router.delete('/:id', equipmentListControllers.remove);

module.exports = router;