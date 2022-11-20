import express from "express";
import productsRouter from "./routes/products.routes.js"
import ventasRouter from "./routes/ventas.routes.js"
import usuariosRouter from "./routes/usuarios.routes.js"
import fileupload from "express-fileupload"
import cors from "cors";
import {FRONTEND_URL} from "./config.js"

const App = express();


App.use(fileupload({
  useTempFiles: true,
  tempFileDir: "./files"  
}));

//midlewares
App.use(express.json());

const dominiosPermitidos = [FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      // El origen del Request esta permitido
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};

App.use(cors(corsOptions));  
//routes
App.use(productsRouter);
App.use(ventasRouter);
App.use(usuariosRouter);


export default App;