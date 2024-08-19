import bcrypt from "bcrypt";
import fs from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import { getJWT } from "../plugins/plugins.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const authHelper = {
  hashPassword: async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return { hashedPassword, salt };
  },
  comparePassword: async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  },

  generateToken: async (
    { email = "", name = "" },
    expireTime = "1h",
    secretKey = process.env.SECRET_TOKEN_KEY
  ) => {
    const token = getJWT().sign({ email, name }, secretKey, {
      expiresIn: expireTime,
    });
    return token;
  },

  generateKeyPair() {
    const publicKeyPath = `${__dirname}/id_rsa_public.pem`;
    const privateKeyPath = `${__dirname}/id_rsa_private.pem`;

    if (!fs.existsSync(publicKeyPath) && !fs.existsSync(privateKeyPath)) {
      const keyPair = crypto.generateKeyPairSync("rsa", {
        modulusLength: 4096, 
        publicKeyEncoding: {
          type: "pkcs1", 
          format: "pem",
        },
        privateKeyEncoding: {
          type: "pkcs1", 
          format: "pem", 
        },
      });

      fs.writeFileSync(publicKeyPath, keyPair.publicKey);

      fs.writeFileSync(privateKeyPath, keyPair.privateKey);

      fs.chmodSync(publicKeyPath, 0o444);
      fs.chmodSync(privateKeyPath, 0o400);

      console.log("Claves generadas y guardadas correctamente.");
    } else {
      console.log("Las claves ya existen. No se generaron nuevos archivos.");
    }
  },
};

export default authHelper;
