import mongoose, { Document, Schema } from "mongoose";

export interface Game extends Document {
    name:String,
    address:string,
    numberOfPeople:number,
    date:Date,
    time:string,
    fieldNumber:number
}


const GameSchema = new Schema<Game>({
    name:{
        type:String,
        required:[true,"Please give the name of the game"]
    },
    address:{
        type:String,
        required:[true,"Please give the address details"]
    },
    numberOfPeople:{
        type:Number,
        required:[true,"Please give the number of people data"]
    },
    date:{
        type:Date,
        required:[true, "Please provide the date"]
    },
    time:{
        type:String,
        required:[true,"Please provide the time"]
    },
    fieldNumber:{
        type:Number,
        required:[true,"Please provide the field number"]
    }
});


let Games = mongoose.model<Game>("Game",GameSchema);


export default Games