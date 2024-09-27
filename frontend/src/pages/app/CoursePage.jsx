import React, { useState } from "react";
import { useParams } from "react-router-dom";
import course1 from "../../assets/course1.jpeg";
import course2 from "../../assets/course2.jpeg";
import course3 from "../../assets/course3.jpeg";

const courseList = [
  {
    id: 1,
    title: "Introduction to React",
    instructor: "John Doe",
    level: "Beginner",
    banner: course1,
    estimatedDuration: "4 weeks",
    description:
      "Learn the basics of React, including components, state, and props. This course will give you a solid foundation in modern front-end development using React.",
    modules: [
      {
        title: "React Fundamentals",
        lessons: [
          { title: "Introduction to Components", duration: "15 min" },
          { title: "JSX Syntax", duration: "20 min" },
          { title: "Props and State", duration: "25 min" },
          { title: "Handling Events", duration: "20 min" },
        ],
      },
      {
        title: "Hooks in React",
        lessons: [
          { title: "Introduction to Hooks", duration: "10 min" },
          { title: "useState Hook", duration: "20 min" },
          { title: "useEffect Hook", duration: "25 min" },
          { title: "Custom Hooks", duration: "30 min" },
        ],
      },
      {
        title: "Routing in React",
        lessons: [
          { title: "Introduction to React Router", duration: "15 min" },
          { title: "Setting Up Routes", duration: "20 min" },
          { title: "Navigation and Links", duration: "15 min" },
          { title: "Route Parameters", duration: "20 min" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    instructor: "Jane Smith",
    level: "Advanced",
    banner: course2,
    estimatedDuration: "6 weeks",
    description:
      "Dive deep into advanced JavaScript concepts and patterns. This course covers closures, asynchronous programming, and design patterns.",
    modules: [
      {
        title: "Closures and Scope",
        lessons: [
          { title: "Lexical Scope", duration: "20 min" },
          { title: "Closures in Practice", duration: "25 min" },
        ],
      },
      {
        title: "Asynchronous JavaScript",
        lessons: [
          { title: "Promises", duration: "30 min" },
          { title: "Async/Await", duration: "35 min" },
          { title: "The Event Loop", duration: "25 min" },
        ],
      },
      {
        title: "Design Patterns",
        lessons: [
          { title: "Module Pattern", duration: "20 min" },
          { title: "Observer Pattern", duration: "30 min" },
          { title: "Singleton Pattern", duration: "25 min" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Business Communication Skills",
    instructor: "Jane Smith",
    level: "Advanced",
    banner: course3,
    estimatedDuration: "6 weeks",
    description:
      "Master essential communication skills for the business environment. This course covers effective communication techniques and professional interaction strategies.",
    modules: [
      {
        title: "Verbal Communication",
        lessons: [
          { title: "Effective Speaking", duration: "20 min" },
          { title: "Persuasive Communication", duration: "25 min" },
        ],
      },
      {
        title: "Written Communication",
        lessons: [
          { title: "Email Etiquette", duration: "30 min" },
          { title: "Business Writing", duration: "35 min" },
        ],
      },
      {
        title: "Interpersonal Skills",
        lessons: [
          { title: "Building Rapport", duration: "25 min" },
          { title: "Active Listening", duration: "20 min" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Professional Etiquette",
    instructor: "Jane Smith",
    level: "Advanced",
    banner: course3,
    estimatedDuration: "6 weeks",
    description:
      "Learn about professional behavior and etiquette in the workplace. This course helps you build a professional image and foster respectful communication in business.",
    modules: [
      {
        title: "Workplace Etiquette",
        lessons: [
          { title: "Professional Behavior", duration: "20 min" },
          { title: "Office Communication", duration: "25 min" },
        ],
      },
      {
        title: "Meeting Etiquette",
        lessons: [
          { title: "Conducting Meetings", duration: "30 min" },
          { title: "Participating Effectively", duration: "35 min" },
        ],
      },
      {
        title: "Networking Etiquette",
        lessons: [
          { title: "Building Connections", duration: "25 min" },
          { title: "Follow-up and Communication", duration: "20 min" },
        ],
      },
    ],
  },
];

function CourseViewPage() {
  const [activeModule, setActiveModule] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const index = useParams().id;

  const courseData = courseList[index - 1];

  const openLessonModal = (lesson) => {
    setCurrentLesson(lesson);
    setIsModalOpen(true);
  };

  const closeLessonModal = () => {
    setIsModalOpen(false);
    setCurrentLesson(null);
  };

  return (
    <div className="h-screen bg-gray-100" key={index}>
      {/* Course Banner */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full">
        <img
          src={courseData.banner}
          alt={courseData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="text-white p-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {courseData.title}
            </h1>
            <p className="text-lg">Instructor: {courseData.instructor}</p>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Course Details */}
          <div className="lg:w-2/3">
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
              <p className="text-gray-600 mb-4">{courseData.description}</p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {courseData.level}
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  {courseData.estimatedDuration}
                </span>
              </div>
            </div>

            {/* Module Content */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
              {courseData.modules.map((module, index) => (
                <div key={index} className="mb-4">
                  <button
                    className={`flex justify-between items-center w-full text-left p-4 rounded-lg ${
                      activeModule === index
                        ? "bg-blue-50 text-blue-700"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveModule(index)}
                  >
                    <span className="font-medium">{module.title}</span>
                    <span className="text-sm">
                      {module.lessons.length} lessons
                    </span>
                  </button>
                  {activeModule === index && (
                    <div className="mt-2 ml-4">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="flex justify-between items-center py-2"
                        >
                          <span className="text-gray-700">{lesson.title}</span>
                          <span className="text-sm text-gray-500">
                            {lesson.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Course Timeline */}
          <div className="lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg p-6 sticky top-6">
              <h2 className="text-2xl font-semibold mb-4">Course Timeline</h2>
              <div className="space-y-4">
                {courseData.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="relative">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-500 rounded-full h-4 w-4 flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <div className="ml-4 font-medium">{module.title}</div>
                    </div>
                    <div className="ml-2 pl-6 border-l-2 border-blue-200">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="mb-2 text-sm text-gray-600 cursor-pointer hover:text-blue-700"
                          onClick={() => openLessonModal(lesson)}
                        >
                          <span className="text-gray-700">{lesson.title}</span>
                          <span className="text-sm text-gray-500">
                            {lesson.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Modal */}
      {isModalOpen && currentLesson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] min-h-[60vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{currentLesson.title}</h3>
              <button
                onClick={closeLessonModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex-grow flex overflow-hidden">
              <div className="w-2/3 p-4 flex flex-col">
                <div className="flex-grow">
                  <iframe
                    src="https://www.youtube.com/embed/CgkZ7MvWUAA?si=0zy_zp_piPzK4O_K"
                    title="Video Lecture"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Play
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                      Pause
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Save Lesson
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Mark as Complete
                  </button>
                </div>
              </div>
              <div className="w-1/3 border-l p-4 overflow-y-auto">
                <h4 className="font-semibold mb-2">Transcript</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h4 className="font-semibold mb-2">Documents</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-700 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                      Assignment 1.pdf
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-700 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                      Lecture Notes.docx
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseViewPage;
