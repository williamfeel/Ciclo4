import express from "express";
import productsRouter from "./routes/products.routes.js"
import ventasRouter from "./routes/ventas.routes.js"
import usuariosRouter from "./routes/usuarios.routes.js"
import fileupload from "express-fileupload"

const App = express();


App.use(fileupload({
  useTempFiles: true,
  tempFileDir: "./files"  
}));

//midlewares
App.use(express.json());
//routes
App.use(productsRouter);
App.use(ventasRouter);
App.use(usuariosRouter);


export default App;