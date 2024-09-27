import React, { useState } from "react";
import { UserCircle, Users, BookOpen, Send } from "lucide-react";

// Mock data for friends and their progress
const friendsData = [
  {
    id: 1,
    name: "Alex",
    progress: 75,
    avatar: "https://avatar.iran.liara.run/public/girl",
  },
  {
    id: 2,
    name: "Sam",
    progress: 60,
    avatar: "https://avatar.iran.liara.run/public/boy",
  },
  {
    id: 3,
    name: "Jordan",
    progress: 90,
    avatar: "https://avatar.iran.liara.run/public/boy",
  },
];

const yourProgress = 80;

const FriendsPage = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Logic to send message would go here
    console.log(`Message sent to ${selectedFriend.name}: ${message}`);
    setMessage("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Accountability Partners
      </h1>

      {/* Your Progress */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <UserCircle className="mr-2" /> Your Progress
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${yourProgress}%` }}
          ></div>
        </div>
        <p className="text-right mt-1 text-sm text-gray-600">
          {yourProgress}% Complete
        </p>
      </div>

      {/* Friends List and Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2" /> Partners
          </h2>
          {friendsData.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span>{friend.name}</span>
              </div>
              <div className="w-1/2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${friend.progress}%` }}
                  ></div>
                </div>
                <p className="text-right mt-1 text-xs text-gray-600">
                  {friend.progress}%
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" /> Progress Comparison
          </h2>
          <div className="space-y-4">
            {friendsData.map((friend) => (
              <div key={friend.id} className="flex items-center">
                <span className="w-20 text-sm">{friend.name}</span>
                <div className="flex-grow mx-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: `${friend.progress}%` }}
                    ></div>
                  </div>
                </div>
                <span className="w-10 text-sm text-right">
                  {friend.progress}%
                </span>
              </div>
            ))}
            <div className="flex items-center">
              <span className="w-20 text-sm font-semibold">You</span>
              <div className="flex-grow mx-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${yourProgress}%` }}
                  ></div>
                </div>
              </div>
              <span className="w-10 text-sm text-right font-semibold">
                {yourProgress}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Collaborate on Lesson</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select a friend:
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) =>
              setSelectedFriend(
                friendsData.find((f) => f.id === parseInt(e.target.value))
              )
            }
          >
            <option value="">Choose a friend</option>
            {friendsData.map((friend) => (
              <option key={friend.id} value={friend.id}>
                {friend.name}
              </option>
            ))}
          </select>
        </div>
        {selectedFriend && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message:
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Send a message to ${selectedFriend.name} about the lesson...`}
            ></textarea>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
              onClick={handleSendMessage}
            >
              <Send className="mr-2" size={16} />
              Send Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
