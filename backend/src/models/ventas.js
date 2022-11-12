import mongoose, {Schema } from "mongoose";


const ventaSchema = new mongoose.Schema(
  {
    cliente:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "usuarios"
    },
    detalle:{
      type: Array,
      required: true,
    },
    confirmado: {
      type: Boolean,
      default: false,
    },
    factura: {
      type: String,
      required: true,
      trim: true
    },
  },
  {
    timestamps: true,
  });

export default mongoose.model("venta", ventaSchema);