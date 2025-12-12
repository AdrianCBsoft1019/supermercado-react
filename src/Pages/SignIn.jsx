import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u) => u.email === email)) {
      alert("Ya existe una cuenta con ese correo.");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    window.dispatchEvent(new Event("userChange"));

    login({ name, email });

  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Crear Cuenta
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nombre completo"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Correo electrónico"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Contraseña"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow"
        >
          Crear Cuenta
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        ¿Ya tienes cuenta?
        <Link
          to="/login"
          className="text-blue-600 font-semibold hover:underline ml-1"
        >
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
