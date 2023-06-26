const Schema = require("./schema");
const express = require("express");
exports.login = async(req,res)=>{
    try{
        const {Email,Password} = req.body;
        const isUser = await Schema.findOne({Email});
        
        if(!isUser){
            console.log("User is not available");
            return res.status(404).json({
                success : false,
                message : "user not found",
            })
        }

        if(isUser.Password === Password){
            console.log("User Logged in");
            res.status(200).json({
                success : true,
                user : isUser,
                message : "user logged in successfully",
            })
        }else{
            console.log("Password unmatched.")
            res.status(404).json({
                success : false,
                message : "Password does not match."
            })
        }
        
    }catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Internal Server error",
            error : error.message,
        })
    }
}