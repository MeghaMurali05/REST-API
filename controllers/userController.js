const User = require('../models/userModel')

const registerUser = async(req,res)=>{
const {email,password} =req.body;
const user=new User({
    email:req.body.email,
    password:req.body.password
    
})
try{
await user.save()
res.json({message:"User Registered Successfully"})
}catch(error){
    res.json({error:error})

}
}


const getUsers=async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch(error){
        res.json({
            error:error
        })
    }
}

const deleteUser = async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({
            message:"User deleted successfully"
        })
    }catch(error){
        res.json({
            error:error
        })
    }
}

const updateUser=async(req,res)=>{
try{
    const user =await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json({
        message:"User updated successfully",
        user:user
    })
}catch(error){
    res.json({
        error:error
    })
}
}

const getByOne=async(req,res)=>{
    try{
const user=await User.findById(req.params.id);
if(!user){
    return res.status(404).json({message:"not found"})
}
res.status(200).json(user)
    }catch(error){
        res.json({
            error:error
        })
    }
}



module.exports = {registerUser, getUsers,deleteUser,updateUser,getByOne}