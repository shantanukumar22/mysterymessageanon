import mongoose from "mongoose";
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("already connected to the database");
  }
  try {
    const db = await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://justforworkandstudy:4fuxwfG9aLxqaKUE@cluster0.lz64hv0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("db connected succesfully");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
