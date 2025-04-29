import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_URl}/food-del-app`)
    .then(() => {
      console.log("DB is connected!!");
    })
    .catch((err) => {
      console.log(err);
    });
};


export default connectDB