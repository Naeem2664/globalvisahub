import React from "react";
import Link from "next/link";

const VisaVerificationHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-green-50 to-white overflow-hidden w-full max-w-screen">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Visa Verification"
          className="w-full h-full object-cover opacity-60 rounded rounded-2xl"
        />
      </div>
      
      <div className="relative z-10 px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800 mb-6">
          Visa Verification Made Simple
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
          Verify your visa status and ensure everything is in order before your trip. Fast, secure, and reliable visa verification services at your fingertips.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"https://moffa.jvvisa.com/visa.php"}>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Verify Now
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default VisaVerificationHero;
