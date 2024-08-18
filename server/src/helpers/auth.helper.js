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

  authenticateToken(req, res) {
    const authCookie = req.cookies.authcookie;
    if (authCookie == null) return res.sendStatus(401);
    jwt.verify(authCookie, process.env.SECRET_TOKEN_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  },

  generateKeyPair() {
    const publicKeyPath = `${__dirname}/id_rsa_public.pem`;
    const privateKeyPath = `${__dirname}/id_rsa_private.pem`;

    // Verificar si los archivos ya existen
    if (!fs.existsSync(publicKeyPath) && !fs.existsSync(privateKeyPath)) {
      // Generar el par de claves
      const keyPair = crypto.generateKeyPairSync("rsa", {
        modulusLength: 4096, // bits - estándar para claves RSA
        publicKeyEncoding: {
          type: "pkcs1", // "Public Key Cryptography Standards 1"
          format: "pem", // Formato más común
        },
        privateKeyEncoding: {
          type: "pkcs1", // "Public Key Cryptography Standards 1"
          format: "pem", // Formato más común
        },
      });

      // Crear el archivo de clave pública
      fs.writeFileSync(publicKeyPath, keyPair.publicKey);

      // Crear el archivo de clave privada
      fs.writeFileSync(privateKeyPath, keyPair.privateKey);

      // Establecer permisos de solo lectura
      fs.chmodSync(publicKeyPath, 0o444);
      fs.chmodSync(privateKeyPath, 0o400);

      console.log("Claves generadas y guardadas correctamente.");
    } else {
      console.log("Las claves ya existen. No se generaron nuevos archivos.");
    }
  },
};

export default authHelper;
