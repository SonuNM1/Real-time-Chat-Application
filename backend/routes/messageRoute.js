
const express = require("express") ; 
const router = express.Router() ; 
const {isAuthenticated} = require("../middleware/isAuthenticated") ; 

const {sendMessage} = require("../controllers/messageController") ; 

router.post("/send/:id", isAuthenticated, sendMessage)

module.exports = router ; 