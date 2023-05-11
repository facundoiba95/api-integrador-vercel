import { Schema,model } from "mongoose";

const betSchema = new Schema({
    user: [Object],
    match: [Object],
    status: String,
    winner: String
},
{
    timestamps:true,
    versionKey:false
})

export default model('Bets', betSchema);