const express = require("express");
const router = express.Router();
const bodyPartsControllers = require("../controllers/bodyParts")

// router.get('/', bodyPartsControllers.all);
router.get('/', bodyPartsControllers.list);
router.get('/:id', bodyPartsControllers.show);
router.post('/', bodyPartsControllers.create);
router.put('/:id', bodyPartsControllers.update);
router.delete('/:id', bodyPartsControllers.remove);

module.exports = router;