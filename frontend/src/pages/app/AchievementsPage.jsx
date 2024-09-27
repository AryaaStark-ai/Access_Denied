import React, { useState } from "react";

const achievements = [
  {
    id: 1,
    title: "First Step",
    description: "Complete your first lesson",
    icon: "🏁",
    unlocked: true,
    progress: 1,
    total: 1,
    details:
      "Congratulations on completing your first lesson! This achievement marks the beginning of your learning journey. Keep up the great work and continue exploring new topics.",
  },
  {
    id: 2,
    title: "Dedicated Learner",
    description: "Complete 10 lessons",
    icon: "📚",
    unlocked: true,
    progress: 10,
    total: 10,
    details:
      "You've shown true dedication by completing 10 lessons. Your commitment to learning is admirable, and you're well on your way to mastering new skills and knowledge.",
  },
  {
    id: 3,
    title: "Learning Machine",
    description: "Complete 50 lessons",
    icon: "🤖",
    unlocked: false,
    progress: 12,
    total: 50,
    details:
      "Completing 50 lessons is a significant milestone. This achievement represents your transformation into a true learning machine, capable of absorbing and retaining vast amounts of information.",
  },
  {
    id: 4,
    title: "Course Conqueror",
    description: "Complete your first course",
    icon: "🏆",
    unlocked: false,
    progress: 0,
    total: 1,
    details:
      "Finishing an entire course is a major accomplishment. This achievement recognizes your ability to see a learning journey through from start to finish, demonstrating your persistence and dedication.",
  },
  {
    id: 5,
    title: "Knowledge Collector",
    description: "Complete 5 courses",
    icon: "🧠",
    unlocked: false,
    progress: 0,
    total: 5,
    details:
      "By completing 5 courses, you've shown a diverse appetite for knowledge. This achievement celebrates your well-rounded approach to learning and your ability to master multiple subjects.",
  },
];

function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Achievements</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
                achievement.unlocked
                  ? "border-green-500 border-2"
                  : "opacity-50"
              }`}
              onClick={() => openModal(achievement)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{achievement.icon}</span>
                  {achievement.unlocked && (
                    <span className="text-green-500 text-sm font-semibold">
                      Unlocked
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h2>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (achievement.progress / achievement.total) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {achievement.progress} / {achievement.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          onClick={closeModal}
        >
          <div
            className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <span className="text-3xl">{selectedAchievement.icon}</span>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {selectedAchievement.title}
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  {selectedAchievement.details}
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AchievementsPage;
