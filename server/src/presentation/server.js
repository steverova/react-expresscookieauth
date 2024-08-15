import authHelper from "../helpers/auth.helper.js";
import { createServer } from "./express.service.js";

export const initExpress = () => {
  createServer()
  authHelper.generateKeyPair()
};

export const Server = {
  start: () => {
    initExpress();
    console.log("Server started");
  },
};
