import producto from "../models/products.js"
import fs from "fs-extra";
import {
  uploadImage,
  deleteImage,
} from "../helper/cloudinary.js"

export const obtenerProductos = async (req, res) => {
  const productos =  await producto.find();
  res.send(productos);
}

export const crearProducto = async (req, res) => {
  try{
    const {nombre, autor, editorial, precio, disponibles} = req.body
    let imagen;
    if(req.files.imagen){
      const result = await uploadImage(req.files.imagen.tempFilePath);
      await fs.remove(req.files.imagen.tempFilePath); 
      imagen = {
        url: result.secure_url,
        public_id: result.public_id,
      }; 
    } 
    const newProducto = new producto({nombre, autor, editorial, precio, disponibles, imagen});
    await newProducto.save();
    return res.json(newProducto);
  } catch (error) {
  console.log(error);
  return res.status(500).json({msg: error.message});
  }
};

export const actualizarProducto = async (req, res) => {
  const actualizarProducto = await producto.findByIdAndUpdate(req.params.id, req.body, {new: true})
  return res.send("prducto actualizado");
}

export const borrarProducto = async (req, res) => {
  const borrarProducto = await producto.findByIdAndDelete(req.params.id)

  if(!borrarProducto) {
    return res.sendStatus(404)
  }else {
    return res.send("producto borrado!")
  }
}

export const obtenerProductoXId = async (req, res) => {
  const obtenerProductoXId =  await producto.findOne()
  return res.send(obtenerProductoXId);
}

export {

}

