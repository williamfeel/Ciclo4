import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    autor: {
      type: String,
      required: true,
      trim: true
    },
    editorial: {
      type: String,
      required: true,
      trim: true
    },
    precio: {
      type: Number,
      required: true,
      trim: true
    },
    disponibles: {
      type: Number,
      required: true,
      trim: true
    },
    imagen: {
      url: String,
      public_id: String,
    },

});

export default mongoose.model("producto", productoSchema);