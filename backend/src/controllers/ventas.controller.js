import venta from "../models/ventas.js"

export const obtenerVentas = async(req, res) => {
  const ventas = await venta.find()
  res.send(ventas)
}

export const crearVenta = async (req, res) => {
  const {factura, total, } = req.body 
  const nuevaVenta = new venta({factura, total})
  await nuevaVenta.save()
  return res.json(nuevaVenta)
}