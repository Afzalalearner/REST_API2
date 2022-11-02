const express=require('express');
const router=express.Router();

const homeCtrlr=require('../controllers/homeCtrlr')

router.get('/',homeCtrlr.home)

router.get('/health',homeCtrlr.health)

module.exports=router;