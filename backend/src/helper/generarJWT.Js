import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const generarJWT = (id) => {
  return jwt.sign({id}, JWT_SECRET, { expiresIn: "30d", });
}

