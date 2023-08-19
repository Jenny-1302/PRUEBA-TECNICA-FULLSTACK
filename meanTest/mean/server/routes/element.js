//Rutas de elementos
const express = require('express');
const router = express.Router();
const elementController = require('../controllers/elementControllers');

//api/elementos
router.post('/', elementController.createElement);
router.get('/', elementController.getElements);
router.put('/:id', elementController.updateElement);
router.get('/:id', elementController.getOnlyElement);
router.delete('/:id', elementController.deleteElement);

module.exports = router;