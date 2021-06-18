import mongoose from 'mongoose'

const messengerSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    contact:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Contact'
    },
    messageItems:[{message:{type:mongoose.Schema.Types.ObjectId, required:true, ref:'Message'}}]
},{
    timestamps:true,
})

const Messenger = mongoose.model('Messenger',messengerSchema)

export default Messenger 