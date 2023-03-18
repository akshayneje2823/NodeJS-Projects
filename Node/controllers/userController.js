const asyncHandler = require("express-async-handler")
const User = require('../model/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// desc Register a user
// @route POST /api/users/register
// access public
const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body


    if (!userName || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    // check whether user is registered or not
    const registeredMailId = await User.findOne({ email })

    if (registeredMailId) {
        res.status(400);
        throw new Error("User already registered!")
    }

    // Hash Password 
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed Password =>", hashedPassword);

    const user = await User.create({
        userName,
        email,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400);
        throw new Error("User data is not valid")
    }

})


// desc Login  user
// @route POST /api/users/login
// access userName
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        console.log("okay")
        const accessToken = jwt.sign(
            {
                user: {
                    userName: user.userName,
                    email: user.email,
                    id: user.id,
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1m" }
        );

        res.status(200).json({ accessToken });
        console.log("==>>>===>>>")
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }


})


// desc CurrentUser Info
// @route POST /api/users/current
// access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
})


module.exports = {
    registerUser,
    currentUser,
    loginUser
}