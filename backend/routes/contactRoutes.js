import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()

import {Contact} from '../models/contactModel.js'

// Fetch all contacts 
router.get('/', asyncHandler(async(req, res) =>{ 
    const contacts = await Contact.find({})
     res.json(contacts)
    })
)

router.get('/:id', asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id)
    if(contact){
        res.json(contact)
    }else{
        res.status(404).json({message:'Contact not found'})
    }
}))

export default router 