
                    // Business Logic of Message 

let Conversation = require("../models/conversationModel") ; 
const Message = require("../models/messageModel") ; 
import {getReceiverSocketId, io} from "../socket/socket.js" ; 

// send a message from the logged-in user to a specified receiver

const sendMessage = async (req, res)=>{
    try{
        const senderId = req.id; // extract senderId from the req. -> sender is same as the logged in user
        const receiverId = req.params.id ; // extract receiver ID from the req. parameter
        const {message} = req.body ; // extract message from the req. body

        // finding conversation between the sender and receiver

        let gotConversation = await Conversation.findOne({
            participants : {$all: [senderId, receiverId]}
        }) ; 

        // if no existing conversation found, create a new one

        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants:[senderId, receiverId]
            })
        } ; 

        // create a new message 

        const newMessage = await Message.create({
            senderId , 
            receiverId , 
            message
        }) ; 

        // if message created successfully, add its ID to the conversation's message array 

        if(newMessage){
            gotConversation.messages.push(newMessage._id) ;
        }

        await gotConversation.save() ; // save the updated conversation 

        // SOCKET.IO

        const receiverSocketId = getReceiverSocketId(receiverId) ; 

        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage) ; 
        }

        return res.status(201).json({
            newMessage
        })

        

    }catch(error){
        console.log(error) ; 
    }
}

// Receive messages between the logged-in user and a specified receiver

const getMessage = async (req, res)=>{
    try{
        const receiverId = req.params.id ; // extract receiver Id from the req params
        const senderId = req.id ; // extract sender id from the logged-in user

        // find conversation between the sender and receiver

        const conversation = await Conversation.findOne({
            participants:{$all: [senderId, receiverId]}
        }).populate("messages") ; 

       // if conversation found, send messages as response 

       if(conversation){
        return res.status(200).json(conversation.messages) ; 
       } else {
        return res.status(200).json([]) ; // send empty array if conversation not found 
       }
    }catch(error){
        console.log(error) ; 
    }
}

module.exports = {sendMessage, getMessage} ; 