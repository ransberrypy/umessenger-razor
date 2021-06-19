import asyncHandler from 'express-async-handler'
import {Contact} from '../models/contactModel.js'

const getContacts = asyncHandler (async(req,res)=>{
    const contacts = await  Contact.find({})
    res.json(contacts)
})

const getContactById = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(contact){
        res.json(contact)
    }else{
        res.status(404).json({message:'Contact not found'})
    }
})

export {getContactById, getContacts} 