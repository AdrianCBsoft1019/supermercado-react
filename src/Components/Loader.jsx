import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300/70 backdrop-blur-sm z-[9999]">
      <div className="
        h-14 w-14 
        rounded-full 
        border-4 
        border-gray-400 
        border-t-transparent 
        shadow-xl 
        animate-spin
      "></div>
    </div>
  );
}