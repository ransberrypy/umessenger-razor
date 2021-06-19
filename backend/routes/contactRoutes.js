import express from 'express'
const router = express.Router()
import {getContactById, getContacts} from '../controllers/contactControllers.js'

// Fetch all contacts 
router.route('/').get(getContacts)
router.route('/:id').get(getContactById)

export default router 