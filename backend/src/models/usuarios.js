import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helper/generarId.js";

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    default: null,
    trim: true,
  },
  direccion: {
    type: String,
    required: null,
    trim: true,
  },
  
  token: {
    type: String,
    default: generarId(),
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
  rol: {
    type: String,
    default: null,
    trim: true,
  }
});

// Antes de guardar el usuario Hashear el password
// https:/www.npmjs.com/package/bcryptjs
// https:/www.npmjs.com/package/bcrypt

usuarioSchema.pre("save", async function (next) {
  if(!this.isModified("password")){
    next();
  };
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// confirmar el password del usuario, esta funcion devuelve verdadero o falso

usuarioSchema.methods.comprobarPassword = async function (passwordFormulario){
  return await bcrypt.compare(passwordFormulario, this.password);
};

const usuario = mongoose.model("usuario", usuarioSchema);

export default usuario;
