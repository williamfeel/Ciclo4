import usuario from "../models/usuarios.js";
import emailRegistro from "../helper/emailRegistro.js"


const registrar = async (req, res) => {
  const {nombre, email, passwaord, telefono, direccion, web} = req.body;
  // validar usuario duplicado
  // findOne busca por los diferentes atributos de la coleccion
  const existeUsuario = await usuario.findOne({email});
  if(existeUsuario){
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({msg: error.message});
  }
  try {
    const user = new usuario(req.body);
    const usuarioGuardado = await user.save();
    // enviar email
    emailRegistro({
      email,
      nombre,
      token: usuarioGuardado.token
    }); 
    res.json(usuarioGuardado);
  }catch (error){
    console.log(error.message);
  };
};

const confirmar = async (req, res) => {
  const {token} = req.params;
  const usuarioConfirmar = await usuario.findOne({token});
  if(!usuarioConfirmar) {
     const error = new Error("Token no valido");
     return res.status(404).json({msg: error.message});
  };
  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();
    res.json({
      msg: "usuario confirmado correctamente!!"
    });
  }catch(error){
    console.error(error.message);
  }; 
};


export {
  registrar,
  confirmar,
};