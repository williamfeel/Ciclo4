import producto from "../models/products.js";
import fs from "fs-extra";
import { uploadImage, deleteImage } from "../helper/cloudinary.js";

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await producto.find();
    res.send(productos);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const { nombre, autor, editorial, precio, disponibles } = req.body;
    let imagen;
    if (req.files.imagen) {
      const result = await uploadImage(req.files.imagen.tempFilePath);
      await fs.remove(req.files.imagen.tempFilePath);
      imagen = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }
    const newProducto = new producto({
      nombre,
      autor,
      editorial,
      precio,
      disponibles,
      imagen,
    });
    await newProducto.save();
    return res.json(newProducto);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    
    
    const actualizarPro = await producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    let imagen= req.files;
    if (imagen) {
      if(actualizarPro.imagen.public_id){
        await deleteImage(actualizarPro.imagen.public_id);        
      }      
      
      const result = await uploadImage(req.files.imagen.tempFilePath);
      await fs.remove(req.files.imagen.tempFilePath);
      
      actualizarPro.imagen = {
        url: result.secure_url,
        public_id: result.public_id,
      };
      await actualizarPro.save(); 
      return res.status(204).json(actualizarPro);
    }
    
     
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

export const borrarProducto = async (req, res) => {
  try {
    const productoBorrado = await producto.findByIdAndDelete(req.params.id);

    if (!productoBorrado) {
      return res.sendstatus(404);
    } else {
      if (productoBorrado.imagen.public_id) {
        await deleteImage(productoBorrado.imagen.public_id);
      }
      return res.status(204).json("Producto Eliminado");
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const obtenerProductoXId = async (req, res) => {
  try {
    const ProductoXId = await producto.findById(req.params.id);
    if (!ProductoXId){
      return res.status(404);
    } else {
        return res.json(ProductoXId);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });}
};
