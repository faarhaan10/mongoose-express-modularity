const mongoose = require("mongoose");
// const { MongoClient } = require("mongodb");

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  let error;
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected successfully`);
  } catch (err) {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
  }
  // MongoClient.connect(uri)
  //   .then(() => {
  //     console.log("Connection established");
  //   })
  //   .catch((err) => {
  //     console.error(err.message);
  //   });
  return error;
};

module.exports = connectDB;
