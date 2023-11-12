import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app'

//Configuring the required environment into Node JS which is present in config.env file.
dotenv.config({ path: './config.env' });

// Connecting to DB
// Need to do a type assertion with string otherwise it is throwing error as it is thinking CONNECTION_STRING can be undefined and 
// mongoose cannot be connected to an undefined connection string
const connectionString = <string>process.env.CONNECTION_STRING;

// const connectionString = process.env.CONNECTION_STRING as string;



mongoose.connect(connectionString).then(() => {
    console.log("Database Successfully Connected")
}).catch((err) => {
    var error = {
        status: "Cannot Connect to DB",
        error: err
    }
    console.log(error);
})


// Configuring port number
let port = process.env.NODE_ENV === 'production' ? process.env.PORT || 5001 : 6001;


app.listen(port, () => {
  console.log("Connected to the port : ", port)
})


