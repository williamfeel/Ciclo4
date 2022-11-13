import venta from "../models/ventas.js"
import producto from "../models/products.js";

/*Funcion que disminuye el stock*/ 
const actualizarStock = async (id, cantidad) => {
  const productoActual = await producto.findById(id);
  if(productoActual.disponibles === 0 || (productoActual.disponibles-cantidad)<0){
    console.log("No hay disponibilidad de productos")
  } else {
    productoActual.disponibles = productoActual.disponibles - cantidad
    console.log(`Stock actualizado del producto: ${productoActual.nombre}`)
    await productoActual.save();
  }
};

export const crearVenta = async (req, res) => {

  try {
    const vendido = new venta(req.body);
    vendido.detalle.forEach(e => {
      actualizarStock(e.inf._id, e.cantidad);
    })
    const ventaGuardada = await vendido.save();
    res.json(ventaGuardada) 
  }catch(error){
    console.error(error.message);
  }  
};

export const obtenerVentas = async (req, res) => {
  try{
    const ventas = await venta.find()
    res.send(ventas) 
  }catch(error){
    return res.status(500).json({msg: error.message})
  }

};

export const actualizarVenta = async (req, res) => {
  try {
    const ventas = await venta.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    return res.status(204).json(ventas)
  }catch(error){
    return res.status(500).json({message: error.message})
  }

};

export const obtenerVentaXId = async (req, res) => {
  try {
    const ventaId = await venta.findById(req.params.id)
    if(!ventaId){
      return res.status(404);
    }else{
      return res.json(ventaId)  
    } 
  }catch (error){
    return res.status(500).json({message: error.message})
  }
};