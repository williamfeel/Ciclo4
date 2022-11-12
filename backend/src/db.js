import mongoose from "mongoose";
import {MONGODB_URI} from "./config.js"
export async function DBconnection(){
  try {
  
    const db = await mongoose.connect(MONGODB_URI);
    console.log("coneccion establecida a la base de datos: ", db.connection.name)
  
  }catch(error){
    console.log(error.message);
  }
}

