import { DBconnection } from "./db.js ";
import { PORT } from "./config.js";
import App from "./App.js";

DBconnection();

App.listen(PORT);
console.log("server is listening on port: ", PORT);