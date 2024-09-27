import React from "react";

const frameColors = {
  basic: "border-gray-300",
  intermediate: "border-blue-400",
  pro: "border-purple-500",
  advanced: "border-green-500",
  expert: "border-yellow-500",
  elite: "border-red-600",
};

const FramedAvatar = ({ avatarUrl, level }) => {
  const frameColor = frameColors[level] || frameColors.basic;

  return (
    <div className={`relative inline-block`}>
      <div
        className={`w-20 h-20 rounded-full overflow-hidden border-4 ${frameColor}`}
      >
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 
                       w-6 h-6 rounded-full bg-white flex items-center justify-center
                       border-2 ${frameColor}`}
      >
        <span className="text-xs font-bold text-gray-800" aria-label={level}>
          {level.charAt(0).toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default FramedAvatar;
