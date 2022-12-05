const User = require("../models/users");

module.exports = class API{
    //get all user 
    static async getAllUser(req, res){
        try{
            const users = await User.find();
            res.status(200).json(users);
        } catch(err){
            res.status(404).json({message: err.message});            
        }
    }

    //get user by id
    static async getUserByID(req, res){
        const id = req.params.id;
        try{
            const user = await User.findById(id);
            res.status(200).json(user);
        } catch(err){
            res.status(404).json({message: err.message});            
        }
    }

    //create user
    static async createUser(req, res){
        const user = req.body;
        try{
            await User.create(user);
            res.status(200).json({message: "User created successfully..."});
        }catch(err){
            res.status(400).json({message: err.message});
        }
    }

    //update users data
    static async updateUserById(req, res){
        const id = req.params.id;
        const userUpdate = req.body;
        try{
            const user = await User.findByIdAndUpdate(id, userUpdate);
            res.status(200).json({message: "User updated successfully..."});
        } catch(err){
            res.status(404).json({message: err.message});            
        }
    }

    //remove users data
    static async deleteUser(req, res){
        const id = req.params.id;
        try{
            const user = await User.findByIdAndDelete(id);
            res.status(200).json({message: "User deleted successfully..."});
        } catch(err){
            res.status(404).json({message: err.message});            
        }
    }
}