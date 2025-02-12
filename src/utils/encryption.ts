import CryptoJS from "crypto-js";

// CLAVE SECRETA.
const SECRET_KEY = "MI_ULTRA_SECRETA_CONTRASEÑA";

// CADENA QLA DE AES-256.
export const encryptData = (data: string): string =>{
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

// Descifra una cadena de texto cifrada con AES-256.
export const descryptData = (ciphertext: string): string =>{
    try{
        const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    }catch(ex){
        console.error("Error al descifrar:", ex);
        return "";
    }
};

// encryptData() CIFRA LA CONTRASEÑA CON AES-256.
// descryptData() DESCIFRA LA CONTRASEÑA CUANDO SE MUESTRA EN LA INTERFAZ.