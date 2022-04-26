import mongoose from 'mongoose';

const CONNECTDB = async () => {
   await mongoose.connect(process.env.MONGODB_URI)
   .then( res => {
     console.log("connected successfully!");
   } )
   .catch( error => {
     console.log(error)
     console.log("ooops failed to connect to database")
   } )
}

export default CONNECTDB;


