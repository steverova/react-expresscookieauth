import { nanoid } from "nanoid";
import jsonwebtoken from "jsonwebtoken";

export const generateID = () => {
  return nanoid();
};

export const getJWT = () => {
  return jsonwebtoken;
};
