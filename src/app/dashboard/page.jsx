"use client";

import {useSession , signOut} from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage(){
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
          router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100 text-lg font-semibold">
            Loading...
          </div>
        );
      }

    return(
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Welcome to the Dashboard</h1>
        <p className="text-lg font-medium text-gray-800 mb-1">Name: {session?.user?.name}</p>
        <p className="text-gray-600 mb-4">Email: {session?.user?.email}</p>

        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition duration-200"
        >
          Sign Out
        </button>
        
      </div>
    </div>
    )
}