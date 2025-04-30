"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  console.log("Session in admin", session);

  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.email !== "admin@gmail.com") {
        router.push("/dashboard");
      }
    } else if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome to Admin Panel</h1>
        <p className="text-lg text-gray-800 font-medium">{session?.user?.name}</p>
    </div>
  );
}