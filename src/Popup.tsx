import React, { useEffect, useState } from "react";
import { getPasswords, addPassword } from "./utils/storage";

const Popup: React.FC = () => {
  const [passwords, setPasswords] = useState<
    { site: string; username: string; password: string }[]
  >([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [site, setSite] = useState("");

  // Acá estamos tomando los datos.
  useEffect(() => {
    getPasswords().then(setPasswords);
  }, []);

  // Acá guardamos los datos.
  const clickAddPass = async () => {
    await addPassword(site, username, password);
    setPasswords([...passwords, { site, username, password }]);
    setSite("");
    setUsername("");
    setPassword("");
  };
  return (
    <div className="p-4 w-72">
      <h2 className="text-lg font-bold">Gestor de Contraseñas</h2>
      <input
        type="text"
        placeholder="Sitio web"
        value={site}
        onChange={(e) => setSite(e.target.value)}
      />
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={clickAddPass}>Guardar</button>
      <ul>
        {passwords.map((entry, index) => (
          <li key={index}>
            <strong>{entry.site}</strong> - {entry.username} - {entry.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
