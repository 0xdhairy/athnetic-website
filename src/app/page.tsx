"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div className="relative isolate px-4 sm:px-6 lg:px-8 min-h-screen bg-background flex items-center justify-center">
        {/* Black background image */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-20 fade"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495420378468-78588a508652?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.26) blur(1px)",
          }}
        />
        {/* Main content */}
        <div className="w-full max-w-md mx-auto py-10 sm:py-16 lg:py-32 flex flex-col items-center justify-center text-center ">
          <div className="hidden sm:mb-6 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-xs sm:text-sm text-gray-300 ring-1 ring-white/10 hover:ring-white/20 backdrop-blur-md bg-white/10">
              Athnetic launches soon – join the waitlist
            </div>
          </div>
          <h1 className="text-4xl sm:text-4xl lg:text-7xl font-semibold tracking-tight bg-gradient-to-tr from-white via-yellow-50 to-white bg-clip-text text-transparent ">
            <span className="inline-flex  sm:flex-row items-center justify-center">
              Where&nbsp;
              <span className="relative text-4xl sm:text-7xl text-transparent bg-gradient-to-r from-white to-orange-100 bg-clip-text ">
                <span className="absolute blur-sm opacity-70 bg-gradient-to-r from-white via-teal-100 to-pink-100 bg-clip-text text-transparent select-none">
                  Athletes
                </span>
                Athletes
              </span>
            </span>
            <span className="block sm:inline"> Connect.</span>
          </h1>
          <div className="p-10 flex items-center justify-center gap-4 sm:gap-x-8 w-full">
            <a
              href="#"
              className="rounded-md bg-gradient-to-tl from-indigo-500 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 shadow-lg border border-gray-300/10 w-full sm:w-auto text-center"
            >
              Wishlist
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-white hover:underline w-full sm:w-auto text-center"
            >
              Coming Soon <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative isolate px-4 sm:px-6 pt-2 lg:px-8 min-h-screen bg-background">
        <h1 className="text-xl sm:text-3xl font-bold">Features</h1>
      </div>
    </div>
  );
}
