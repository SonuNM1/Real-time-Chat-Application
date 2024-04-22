
const express = require("express") ; 
const {register, login, logout, getOtherUsers} = require("../controllers/userController.js") ; 
const {isAuthenticated} = require("../middleware/isAuthenticated.js") ; 

const router = express.Router() ; 

router.post("/register", register) ; 
router.post("/login", login) ; 
router.get("/logout", logout) ; 
router.get("/", isAuthenticated, getOtherUsers) ; 

module.exports = router ; 
