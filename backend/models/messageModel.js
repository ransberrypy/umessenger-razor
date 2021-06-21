import mongoose from 'mongoose'


const messageSchema = mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    content:{type:String,required:true}
    
},{
    timestamps:true,
})

const Message = mongoose.model('Message',messageSchema)

export  {Message} 