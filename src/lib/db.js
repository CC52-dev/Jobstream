'use server'
import mongoose from "mongoose";


const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState !== 1 && connectionState !== 2) {
    try {
      await mongoose.connect("mongodb://localhost:27017/", {
        dbName: "jobstream",
        bufferCommands: true,
        useNewUrlParser: true,
      });
     console.log("Connected to JobstreamDB");
    } catch (err) {
      console.log("Error: ", err);
      throw new Error("Error: ", err);
    }
  }
};

export default connect;