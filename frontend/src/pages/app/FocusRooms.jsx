import React from "react";
import { Users, Clock, ArrowRight } from "lucide-react";

// Mock data for focus rooms
const focusRooms = [
  {
    id: 1,
    name: "Mathematics",
    subjects: ["Calculus", "Algebra"],
    peopleOnline: 12,
  },
  {
    id: 2,
    name: "Physics",
    subjects: ["Mechanics", "Thermodynamics"],
    peopleOnline: 8,
  },
  {
    id: 3,
    name: "Computer Science",
    subjects: ["Algorithms", "Data Structures"],
    peopleOnline: 15,
  },
  {
    id: 4,
    name: "Literature",
    subjects: ["Shakespeare", "Modern Poetry"],
    peopleOnline: 6,
  },
];

// Mock data for user's room history
const roomHistory = [
  { id: 1, name: "Mathematics", duration: "2h 30m" },
  { id: 2, name: "Physics", duration: "1h 45m" },
  { id: 3, name: "Computer Science", duration: "3h 15m" },
];

const RoomCard = ({ room }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
    <p className="text-sm text-gray-600 mb-2">{room.subjects.join(", ")}</p>
    <div className="flex justify-between items-center">
      <div className="flex items-center text-sm text-gray-500">
        <Users size={20} className="mr-1 text-blue-500" />
        <span className="text-green-500">{room.peopleOnline} online</span>
      </div>
      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300 flex items-center">
        Join
        <ArrowRight size={16} className="ml-1" />
      </button>
    </div>
  </div>
);

const HistoryItem = ({ item }) => (
  <div className="flex justify-between items-center py-2 border-b last:border-b-0">
    <span>{item.name}</span>
    <div className="flex items-center text-sm text-gray-500">
      <Clock size={16} className="mr-1" />
      <span>{item.duration}</span>
    </div>
  </div>
);

const FocusRoomsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Focus Rooms
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Focus Rooms List */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Available Rooms</h2>
          {focusRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* User's Room History */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Room History</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            {roomHistory.map((item) => (
              <HistoryItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusRoomsPage;
