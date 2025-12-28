//model and schema

import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstnumber:{
        type:Number,
        require:true
    },
    secondnumber:{
        type:Number,
        require:true
    },
    operation:{
        type:String,
        require:true
    }
})

const Calci = mongoose.model('Calci',schema)

export default Calci