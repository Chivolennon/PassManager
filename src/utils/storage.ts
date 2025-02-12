import { encryptData, descryptData } from "./encryption";

const STORAGE_KEY = "passwords";

// Verifica si estamos dentro de una extensión de navegador
const isExtension = typeof chrome !== "undefined" && chrome.storage && chrome.storage.local;

/**
 * Guarda una nueva contraseña en el almacenamiento local o en la extensión.
 */
export const addPassword = async (site: string, username: string, password: string) => {
  const encryptedPassword = encryptData(password);
  const newEntry = { site, username, password: encryptedPassword };

  if (isExtension) {
    return new Promise<void>((resolve) => {
      chrome.storage.local.get([STORAGE_KEY], (data) => {
        const storedPasswords = data[STORAGE_KEY] || [];
        const updatedPasswords = [...storedPasswords, newEntry];

        chrome.storage.local.set({ [STORAGE_KEY]: updatedPasswords }, () => {
          resolve();
        });
      });
    });
  } else {
    console.warn("Usando localStorage en lugar de chrome.storage.");
    const storedPasswords = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    storedPasswords.push(newEntry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedPasswords));
  }
};

/**
 * Obtiene todas las contraseñas almacenadas.
 */
export const getPasswords = async (): Promise<{ site: string; username: string; password: string }[]> => {
  return new Promise((resolve) => {
    if (isExtension) {
      chrome.storage.local.get([STORAGE_KEY], (data) => {
        const passwords = data[STORAGE_KEY] || [];
        resolve(passwords.map((entry: any) => ({
          ...entry,
          password: descryptData(entry.password),
        })));
      });
    } else {
      console.warn("Usando localStorage en lugar de chrome.storage.");
      const passwords = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      resolve(passwords);
    }
  });
};


//  addPassword() GUARDA UNA CONTRASEÑA ENCRIPTADA EN CHROME.
//  getPassword() RECUPERA LAS CONTRASEÑAS Y LAS DESCIFRA ANTES DE MOSTRARLAS.