import React, { useState } from "react";
import FrameAvatar from "../../components/FramedAvatar";

// Mock data for leaderboard entries
const initialLeaderboard = [
  {
    id: 1,
    name: "Alex Johnson",
    score: 9850,
    rank: 1,
    level: "intermediate",
  },
  {
    id: 2,
    name: "Samantha Lee",
    score: 9720,
    rank: 2,
    level: "advanced",
  },
  {
    id: 3,
    name: "Michael Chen",
    score: 9680,
    rank: 3,
    level: "pro",
  },
  {
    id: 4,
    name: "Emily Davis",
    score: 9550,
    rank: 4,
    level: "elite",
  },
  {
    id: 5,
    name: "David Wilson",
    score: 9490,
    rank: 5,
    level: "expert",
  },
  {
    id: 6,
    name: "Sarah Brown",
    score: 9420,
    rank: 6,
    level: "advanced",
  },
  {
    id: 7,
    name: "James Taylor",
    score: 9380,
    rank: 7,
    level: "pro",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    score: 9310,
    rank: 8,
    level: "intermediate",
  },
  {
    id: 9,
    name: "Daniel Kim",
    score: 9280,
    rank: 9,
    level: "pro",
  },
  {
    id: 10,
    name: "Sophia Nguyen",
    score: 9220,
    rank: 10,
    level: "intermediate",
  },
];

function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState(initialLeaderboard);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle search functionality
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredLeaderboard = initialLeaderboard.filter((entry) =>
      entry.name.toLowerCase().includes(term)
    );

    setLeaderboard(filteredLeaderboard);
  };

  // Sort leaderboard by name, rank, or score
  const handleSort = (field) => {
    const sortedLeaderboard = [...leaderboard].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[field] > b[field] ? 1 : -1;
      }
      return a[field] < b[field] ? 1 : -1;
    });
    setLeaderboard(sortedLeaderboard);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Paginate the leaderboard
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = leaderboard.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Leaderboard
        </h1>

        {/* Search input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search learners..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Sorting options */}
        <div className="mb-4 flex justify-between">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => handleSort("name")}
          >
            Sort by Name
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => handleSort("rank")}
          >
            Sort by Rank
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => handleSort("score")}
          >
            Sort by Score
          </button>
        </div>

        {/* Leaderboard list */}
        <div className="bg-gray-100 rounded-md shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {currentItems.map((entry) => (
              <li key={entry.id}>
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center">
                    <FrameAvatar
                      avatarUrl={`https://avatar.iran.liara.run/username?username=${entry.name}`}
                      level={entry.level}
                    />
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">
                        {entry.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Rank: {entry.rank}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg text-gray-900">
                      Score: {entry.score}
                    </p>
                    {entry.rank <= 3 && (
                      <span
                        className={`inline-block px-3 py-1 text-sm font-medium rounded ${
                          entry.rank === 1
                            ? "bg-yellow-500 text-white"
                            : entry.rank === 2
                            ? "bg-gray-300 text-black"
                            : "bg-orange-400 text-white"
                        }`}
                      >
                        {entry.rank === 1
                          ? "🥇 1st"
                          : entry.rank === 2
                          ? "🥈 2nd"
                          : "🥉 3rd"}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          {Array.from({
            length: Math.ceil(leaderboard.length / itemsPerPage),
          }).map((_, i) => (
            <button
              key={i}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === i + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* No results message */}
        {currentItems.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No learners found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default LeaderboardPage;
