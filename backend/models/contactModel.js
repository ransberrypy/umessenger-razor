import mongoose from 'mongoose'


const messageSchema = mongoose.Schema({
    content:{type:String,}
},{
    timestamps:true,
})


const contactSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    online:{
        type:Boolean,
        default:true,
    },
    blacklisted:{
        type:Boolean,
        default:false,
    },  
    messages:[messageSchema],   

},{
    timestamps:true,
})

const Contact = mongoose.model('Contact',contactSchema)
const Message = mongoose.model('Message',messageSchema)

export  {Contact, Message} 