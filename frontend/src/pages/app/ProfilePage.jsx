import React from "react";
import { RxAvatar } from "react-icons/rx";

function ProfilePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side - Profile */}
        <div className="w-1/2 border-r">
          <div className="flex flex-col items-center justify-center p-8 h-full">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4">
            <RxAvatar  className="w-full h-full"/>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-600">johndoe@gmail.com</p>
          </div>
        </div>

        {/* Right side - Stats */}
        <div className="w-1/2 flex flex-col">
          {/* Top stats */}
          <div className="flex-1 p-6 border-b">
            <h3 className="text-lg font-semibold mb-4">Learning Progress</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Courses taken:</span>
                <span className="font-medium">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lessons completed:</span>
                <span className="font-medium">10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Achievements:</span>
                <span className="font-medium">5</span>
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="flex-1 p-6">
            <h3 className="text-lg font-semibold mb-4">Performance</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total score:</span>
                <span className="font-medium">100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rank:</span>
                <span className="font-medium">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
