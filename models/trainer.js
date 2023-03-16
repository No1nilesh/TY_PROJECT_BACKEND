const mongoose = require("mongoose");


const trainerSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name:{type:String , required:true},
    email:{type:String, required: true},
    assigned_members:{type: [String], max: 10,uniquie:true},
    specialties: [{ type: String, required: true }],
    hourlyRate: { type: Number, required: true },
    availability: { type: String, required: true },
  });

 const Trainer = mongoose.model("trainer", trainerSchema)

 module.exports =Trainer