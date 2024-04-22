const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/bloom');
        console.log("connection success")

    }
    catch (error)
    {
        console.log("connection fail")
    }
}

module.exports = connectDB