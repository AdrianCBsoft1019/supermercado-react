import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Iniciar Sesión
      </h2>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
        >
          Entrar
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        ¿No tienes cuenta?
        <Link
          to="/signin"
          className="text-blue-600 font-semibold hover:underline ml-1"
        >
          Regístrate
        </Link>
      </p>
    </div>
  );
}
