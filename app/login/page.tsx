"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const HARDCODE_USERNAME = "marina";
  const HARDCODE_PASSWORD = "12345678";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === HARDCODE_USERNAME && password === HARDCODE_PASSWORD) {
      router.push("/dashboard");
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/bg3-min.jpg')" }}
    >
      <form
        onSubmit={handleLogin}
        className="w-[340px] bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-6 text-white"
      >
        <h1 className="text-2xl font-semibold text-center">Sky1MAS</h1>
        <p className="text-sm text-center mb-6 opacity-80">
          Monitoring & Alert System
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="flex items-center text-sm gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          {error && <p className="text-red-300 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
