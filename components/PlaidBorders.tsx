"use client";

export default function PlaidBorders() {
  return (
    <>
      {/* Top Left Border */}
      <div 
        className="absolute top-0 left-0 w-32 sm:w-48 h-32 sm:h-48 z-10 pointer-events-none drop-shadow-md"
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 20%, 95% 40%, 85% 60%, 90% 80%, 75% 100%, 0 100%)",
          background: "linear-gradient(90deg, rgba(32, 42, 94, 0.4) 50%, transparent 50%), linear-gradient(rgba(32, 42, 94, 0.4) 50%, transparent 50%), #B5C7E8",
          backgroundSize: "20px 20px"
        }}
      />
      {/* Top Right Border */}
      <div 
        className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 z-10 pointer-events-none drop-shadow-md"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 25% 100%, 10% 80%, 15% 60%, 5% 40%, 10% 20%)",
          background: "linear-gradient(90deg, rgba(32, 42, 94, 0.4) 50%, transparent 50%), linear-gradient(rgba(32, 42, 94, 0.4) 50%, transparent 50%), #B5C7E8",
          backgroundSize: "20px 20px"
        }}
      />
      {/* Bottom Left Border */}
      <div 
        className="absolute bottom-0 left-0 w-48 sm:w-64 h-24 sm:h-32 z-10 pointer-events-none drop-shadow-md"
        style={{
          clipPath: "polygon(0 25%, 15% 15%, 35% 25%, 55% 10%, 75% 20%, 100% 0, 100% 100%, 0 100%)",
          background: "linear-gradient(90deg, rgba(32, 42, 94, 0.4) 50%, transparent 50%), linear-gradient(rgba(32, 42, 94, 0.4) 50%, transparent 50%), #B5C7E8",
          backgroundSize: "20px 20px"
        }}
      />
      {/* Bottom Right Border */}
      <div 
        className="absolute bottom-0 right-0 w-48 sm:w-64 h-24 sm:h-32 z-10 pointer-events-none drop-shadow-md"
        style={{
          clipPath: "polygon(0 0, 25% 20%, 45% 10%, 65% 25%, 85% 15%, 100% 25%, 100% 100%, 0 100%)",
          background: "linear-gradient(90deg, rgba(32, 42, 94, 0.4) 50%, transparent 50%), linear-gradient(rgba(32, 42, 94, 0.4) 50%, transparent 50%), #B5C7E8",
          backgroundSize: "20px 20px"
        }}
      />
    </>
  );
}
