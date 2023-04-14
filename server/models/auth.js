import { model , Schema , ObjectId } from "mongoose";


const schema = new Schema({
    username:{
        type: String,
        trim:true,
        unique:true,
        required:true,
        lowercase:true,
    },
    name:{
        type: String,
        required:true,
        trim:true,
        default:"",
    },
    email:{
        type: String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
        maxlength:256,
    },
    address: {
        type:String,
        default:"", 

    },
    company: {
        type:String,
        default:"", 

    },
    phone : {
        type:String,
        default:"", 

    },
    photo:{},
    role:{
        type:[String],
        default:["Buyer"],
        enum:["Buyer","Seller","Admmin"],
    },
    enquiredProperties: [{
        type: ObjectId,
        ref:"Ad"
    }],
    wishlist: [{
        type: ObjectId,
        ref:"Ad"
    }],
    resetCode:"" ,
 


},
{timestamps:true }
);


export default model("User",schema);
