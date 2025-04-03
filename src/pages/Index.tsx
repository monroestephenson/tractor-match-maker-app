
import React from "react";
import Header from "@/components/Header";
import TractorSwiper from "@/components/TractorSwiper";
import { Toaster } from "sonner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Toaster />
      <Header />
      
      <main className="flex-1 pt-16 pb-4 px-4 flex flex-col">
        <div className="max-w-lg w-full mx-auto flex-1 flex flex-col">
          <TractorSwiper />
        </div>
      </main>
    </div>
  );
};

export default Index;
