import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Datastore from '@seald-io/nedb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const Collections = () => {
  const dbPath = path.resolve(__dirname, '../db/collections');
  ensureDirectoryExists(dbPath);

  const userDbFilePath = path.join(dbPath, 'user_store.db');
  const authDbFilePath = path.join(dbPath, 'auth_store.db');

  const loadDatabase = (datastore) => {
    return new Promise((resolve, reject) => {
      datastore.loadDatabase((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  };

  const userCollection = new Datastore({ filename: userDbFilePath });
  const authCollection = new Datastore({ filename: authDbFilePath });

  const loadDatabases = async () => {
    try {
      await loadDatabase(userCollection);
      await loadDatabase(authCollection);
      console.log('Databases loaded successfully.');
    } catch (err) {
      console.error('Error loading databases:', err);
    }
  };

  loadDatabases();

  return {
    userCollection,
    authCollection,
  };
};

export default Collections;
