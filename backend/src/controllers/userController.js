import {User} from '../models/userModel.js';
import httpStatus from 'http-status';
import bcrypt,{hash} from 'bcrypt';
import crypto from 'crypto';
import Meeting from "../models/meeting.Model.js";

const register = async(req,res)=>{
    const {name,username,password} = req.body;

    try{
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(httpStatus.FOUND).json({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            name:name,
            username:username,
            password:hashedPassword
        });

        await newUser.save();

        res.status(httpStatus.CREATED).json({message:"User registered successfully"});

    }catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:"Something went wrong",error:err.message});
    }
}

const login = async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(httpStatus.BAD_REQUEST).json({message:"Please Provide"});
    }
    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(httpStatus.NOT_Found).json({message:"User not found"});
        }
        if(await bcrypt.compare(password,user.password)){
            let token = crypto.randomBytes(20).toString("hex");
                user.token = token;
                await user.save();
                return res.status(httpStatus.OK).json({token:token});
            
        }else{
            return res.status(httpStatus.UNAUTHORIZED).json({message:"Invalid credentials"});
        }
    }catch(err){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:"Something went wrong",error:err.message});
    }
}

const getUserHistory = async(req,res) =>{
    const {token} = req.query;
    try{
        const user = await User.findOne({token:token});
        const meetings = await Meeting.find({user_id:user.username});
        res.json(meetings)
    }
    catch(err){
        res.json({message:`Something went wrong ${err}`})
    }
}

const addToHistory = async(req,res) =>{
    const {token,meeting_code} = req.body;
    try{
        const user = await User.findOne({token:token});
        const newMeeting = new Meeting({
            user_id:user.username,
            meetingCode:meeting_code,
        })
        await newMeeting.save();
        res.status(httpStatus.CREATED).json({message:"added code to history"});
    }catch(err){
        res.json({message:`Something went wrong ${err}`})
    }
}

export {register,login,getUserHistory,addToHistory};