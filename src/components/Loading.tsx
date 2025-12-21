import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-navy-950 z-50">
      {/* لوگوی چرخشی */}
      <img
        src="/images/Logo.png" // مسیر درست public
        alt="Logo"
        className="h-32 w-32 animate-ping"
      />
    </div>
  );
};

export default Loading;
