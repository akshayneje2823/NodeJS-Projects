const asyncHandler = require('express-async-handler')
const Contact = require('../model/contactModel')

//@desc Get all contacts
//routes GET /api/contacts
//access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})


//@desc get single contact
//routes GET /api/contact/:id
//access private
const getContact = asyncHandler(asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(400);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
}))


//@desc update contact
//routes Post /api/contacts/:id
//access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(400);
        throw new Error("Contact not found")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updateContact)
}
)

//@desc Create contact
//routes Post /api/contacts/:id
//access private
const createContact = asyncHandler(async (req, res) => {

    console.log("body ==> ", req.body)
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
        res.status(400);

        throw new Error('All fields are required')
    }

    const contacts = await Contact.create({
        name,
        email,
        phone
    })

    res.status(201).json(contacts)
})



//@desc delete contact
//routes Delete /api/contacts/:
//access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
        res.status(400);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})



module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}