const express = require('express');
const router = express.Router()
const SignUpTemplateCopy = require('../models/SignUpModels')
const { registerValidation } = require("../validation/validation");

router.post('/signup',async (req,res)=>{
    const { error } = registerValidation(req.body);
    if (error) {
    return res.status(400).send(error.response.data);
    }
    const userExisted = await SignUpTemplateCopy.findOne({ email: req.body.email });
    if (userExisted) return res.send("User already registered");
    const signedUpuser = new SignUpTemplateCopy({
        fullname:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    signedUpuser.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

})

module.exports = router;