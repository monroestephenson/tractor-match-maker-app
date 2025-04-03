
import React from "react";
import { Tractor } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center px-4">
      <div className="flex items-center mx-auto max-w-lg w-full">
        <Tractor className="h-8 w-8 text-tractr-green" />
        <h1 className="text-2xl font-bold ml-2 text-tractr-green">Tractr</h1>
      </div>
    </header>
  );
};

export default Header;
