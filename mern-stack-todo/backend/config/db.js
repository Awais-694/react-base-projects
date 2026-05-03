const mongoose  = require('mongoose');


const connectDB = async ()=>{

    
        await mongoose.connect('mongodb://127.0.0.1:27017/todoDB', {
            serverSelectionTimeoutMS: 5000,
        })
        .then(()=>console.log("MongoDB Successfully Connected "))
        .catch(err => console.log("Err: ", err));
     
};

module.exports = connectDB;
