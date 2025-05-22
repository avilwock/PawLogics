 const mongoose = require('mongoose');
 const {Schema, model } = mongoose;
 const bcrypt = require('bcyrpt');

 const petSchema = new Schema({
    pet_name: {
        type: String,
        required: true,
    },
    pet_breed: {
        type:String,
    },
    birthday: {
        type: String,
    },
    age: {
        type: String,
    },
    sex: {
        
    }
 })