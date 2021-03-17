const express = require('express');
const router = express.Router()
const TabController = require('../controllers/TabController')


router.get('/', TabController.tab_index);


router.post('/', TabController.tab_create);


router.delete('/:tabId', TabController.tab_delete);


router.put('/:tabId', TabController.tab_update);


router.get('/tabStats/', TabController.tab_stats);


module.exports = router