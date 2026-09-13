import mongoose from "mongoose";


const userChemna = new mongoose.Schema({

    name:{
        type: String,
        required:[ true, 'Name is required']
    },

    email: {
        required:[true, 'Email is required'],
        unique: true,
    },
    img: {
        type: String,

    },
    role: {
        type: [String],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    }

    
});

export const UserModel = mongoose.model('User', userChemna);