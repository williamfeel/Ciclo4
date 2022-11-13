import mongoose, {Schema} from "mongoose";


const ventaSchema = new mongoose.Schema(
  {
    cliente:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "usuarios",
      trim: true
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
    total:{
      type: Number,
      required: true,
      trim: true
    },
    estado:{
      type: String,
      default: "vigente"
    }
  },
  {
    timestamps: true,
  });

export default mongoose.model("venta", ventaSchema);