const {mongoose, Schema} = require('mongoose');

const userSchema= new Schema({
        firstName: {
            type:String,
            required: [true, 'First name is required!'],
            lowercase:true,
            trim:true
        },
        lastName: {
            type:String,
            lowercase:true,
            trim:true
        },
        userName: {
            type:String,
            required: [true, 'User name is required!'],
            lowercase: true,
            trim:true,
            unique:true,
            index: true   
        },
        email: {
            type: String,
            required: [true, 'Email is required!'],
            lowercase: true,
            trim: true,
            unique: true,
            index: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required!']
        },
        age: {
            type: Number,
        },
        gender: {
            type: String
        },
        avatar: {
            type: String, // cloudinary url
        },
        coverImage: {
            type: String, // cloudinary url
        },
        totalExperience: {
            type:Number
        },
        profileTitle: {
            type: String,
            lowercase: true,
            trim: true,
        },
        profileDetails: {
            type: String,
        },
        isProfileComplated: {
            type:Boolean,
            default: false
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('User',userSchema);