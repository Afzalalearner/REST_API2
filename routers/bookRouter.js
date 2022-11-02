const express=require('express')
const router=express.Router()

const bookCtrlr=require('./../controllers/bookCtrlr')

router.get('/',bookCtrlr.get)
router.get('/:id',bookCtrlr.getById)
router.post('/',bookCtrlr.post)
router.put('/:id',bookCtrlr.put)
router.delete('/:id',bookCtrlr.remove)

module.exports=router;