
                    // Business Logic of Message 

let Conversation = require("../models/conversationModel") ; 

const Message = require("../models/messageModel") ; 

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

        return res.status(201).json({
            message: "Response sent successfully"
        })

        // SOCKET.IO

    }catch(error){
        console.log(error) ; 
    }
}

module.exports = {sendMessage} ; 