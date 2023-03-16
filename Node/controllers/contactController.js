const asyncHandler = require('express-async-handler')

//@desc Get all contacts
//routes GET /api/contacts
//access private
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Hey it worked..." })
})


//@desc get single contact
//routes GET /api/contact/:id
//access private
const getContact = asyncHandler(asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get contact for " + req.params.id })
}))


//@desc update contact
//routes Post /api/contacts/:id
//access private
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: req.params.id + ' updated successfully' })
}
)

//@desc Create contact
//routes Post /api/contacts/:id
//access private
const createContact = asyncHandler(async (req, res) => {

    console.log("body ==> ", req.body)
    const { name, email, id } = req.body

    if (!name || !email || !id) {
        res.status(400);

        throw new Error('All fields are required')
    }

    res.status(201).json({ message: 'created successfully' })
})



//@desc delete contact
//routes Delete /api/contacts/:
//access private
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: req.params.id + ' deleted successfully' })
})



module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}