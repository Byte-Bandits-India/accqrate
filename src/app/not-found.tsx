import React from "react";
import NotFoundButton from "@/Components/NotFoundButton";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">The page you are looking for does not exist.</p>
        <NotFoundButton />
      </div>
    </main>
  );
}
