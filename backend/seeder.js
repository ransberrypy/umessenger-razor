import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import contacts from './data/contacts.js'
import User from './models/userModel.js'
import {Contact} from './models/contactModel.js'
import Messenger from './models/messengerModel.js'
import connectDB from './config/db.js'



dotenv.config()

connectDB()

const importData = async () => {
    try{
        // await Messenger.deleteMany()
        await Contact.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        
        const adminUser = createdUsers[0]._id

        const sampleContacts = contacts.map(contact => {
            return {...contact, user:adminUser}
        })

        await Contact.insertMany(sampleContacts)

        console.log("Data imported!")
        process.exit()
    } catch (error){
        console.error(`${error}`)
        process.exit(1)

    }
}

const destroyData = async () => {
    try{
        // await Messenger.deleteMany()
        await Contact.deleteMany()
        await User.deleteMany()

        console.log("Data deleted!")
        process.exit()
    } catch (error){
        console.error(`${error}`)
        process.exit(1)

    }
}
if (process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}