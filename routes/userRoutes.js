const express=require('express')
const router= express.Router()
const{registerUser, getUsers,deleteUser,updateUser, getByOne}=require('../controllers/userController')


router.post('/registeruser',registerUser)
router.get('/getuser',getUsers)
router.delete('/deleteuser/:id',deleteUser)
router.put('/updateuser/:id',updateUser)
router.get('/getone/:id',getByOne)






module.exports=router