const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return /^[a-zA-Z-]+$/.test(value)
            },
            message: 'Invalid Username Format'
        }
    },
    name: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /$[a-zA-Z-]+$/.test(value);
            },
            message: 'Name must contain only letters and hyphens'
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
         validate: {
            validator: function(value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            },
            message: 'Invalid Email Format'
        }
    },
    password: {
          type:String,
        required: true,
        minlength: 8,
    }, 
    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet'
    }]
}, {
        timestamps: true
    }
)

UserSchema.methods.isCorrectPassword = async function(password)
{
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;