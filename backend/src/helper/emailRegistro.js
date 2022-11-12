import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      // type: "OAuth2",
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });
  const { email, nombre, token } = datos;
  //enviar el email
  const info = await transport.sendMail({
    from: "A4DEVS - Administrador 4DEVS",
    to: email,
    subject: "verifica tu cuenta 4DEVS",
    text: "por favor verifica tu cuenta",
    html: `<p>Hola: ${nombre}, verifica tu cuenta en 4DEVS.</p><p>Tu cuenta ya esta lista, solo debes comprobar en el siguiente enlace: <a href="${process.env.FRONTEND_URL}/confirmar/${token}">comprobar cuenta</a></p><p>si tu no creaste esta cuenta puedes ignorar este mensaje</p>`
  });
}

export default emailRegistro;