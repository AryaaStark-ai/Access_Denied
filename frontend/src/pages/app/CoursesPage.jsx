import React, { useState } from "react";
import course1 from "../../assets/course1.jpeg";
import course2 from "../../assets/course2.jpeg";
import course3 from "../../assets/course3.jpeg";
import course4 from "../../assets/course4.jpeg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projectBox = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const projectItem = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

// Mock data for courses with additional details
const initialCourses = [
  {
    id: 1,
    title: "Introduction to React",
    instructor: "John Doe",
    level: "Beginner",
    banner: course1,
    estimatedDuration: "4 weeks",
    description:
      "Learn the basics of React, including components, state, and props.",
    modules: [
      {
        title: "React Fundamentals",
        lessons: ["Components", "JSX", "Props", "State"],
      },
      { title: "Hooks", lessons: ["useState", "useEffect", "useContext"] },
      { title: "Routing", lessons: ["React Router", "Navigation"] },
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    instructor: "Jane Smith",
    level: "Advanced",
    banner: course2,
    estimatedDuration: "6 weeks",
    description: "Dive deep into advanced JavaScript concepts and patterns.",
    modules: [
      {
        title: "Closures and Scope",
        lessons: ["Lexical Scope", "Closures in Practice"],
      },
      {
        title: "Asynchronous JavaScript",
        lessons: ["Promises", "Async/Await", "Event Loop"],
      },
      {
        title: "Design Patterns",
        lessons: ["Module Pattern", "Observer Pattern", "Singleton"],
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
    description: "Dive deep into Communication skills.",
    modules: [
      {
        title: "Closures and Scope",
        lessons: ["Lexical Scope", "Closures in Practice"],
      },
      {
        title: "Asynchronous JavaScript",
        lessons: ["Promises", "Async/Await", "Event Loop"],
      },
      {
        title: "Design Patterns",
        lessons: ["Module Pattern", "Observer Pattern", "Singleton"],
      },
    ],
  },
  {
    id: 4,
    title: "Professional Etiquette",
    instructor: "Jane Smith",
    level: "Advanced",
    banner: course4,
    estimatedDuration: "6 weeks",
    description: "Dive deep into advanced JavaScript concepts and patterns.",
    modules: [
      {
        title: "Closures and Scope",
        lessons: ["Lexical Scope", "Closures in Practice"],
      },
      {
        title: "Asynchronous JavaScript",
        lessons: ["Promises", "Async/Await", "Event Loop"],
      },
      {
        title: "Design Patterns",
        lessons: ["Module Pattern", "Observer Pattern", "Singleton"],
      },
    ],
  },
];

function CoursesPage() {
  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [congratsModal, setCongratsModal] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredCourses = initialCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term) ||
        course.level.toLowerCase().includes(term)
    );

    setCourses(filteredCourses);
  };

  const openModal = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  const courseEnroll = (courseId) => {
    setCongratsModal(true);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Available Courses
        </h1>

        {/* Search input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Course list */}
        <motion.div
          variants={projectBox}
          initial="initial"
          whileInView="animate"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course) => (
            <motion.div variants={projectItem}
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => openModal(course)}
            >
              <img
                src={course.banner}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  Instructor: {course.instructor}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">
                    {course.estimatedDuration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No results message */}
        {courses.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No courses found matching your search.
          </p>
        )}
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          onClick={closeModal}
        >
          <div
            className="relative top-20 mx-auto p-5 border w-11/12 max-w-3xl shadow-lg rounded-md bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mt-3">
              <img
                src={selectedCourse.banner}
                alt={selectedCourse.title}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <h3 className="text-2xl leading-6 font-bold text-gray-900 mt-4">
                {selectedCourse.title}
              </h3>
              <p className="text-gray-600 mt-2">
                Instructor: {selectedCourse.instructor}
              </p>
              <p className="text-blue-600 mt-1">
                {selectedCourse.level} • {selectedCourse.estimatedDuration}
              </p>
              <p className="text-gray-700 mt-4">{selectedCourse.description}</p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Course Content</h4>
                {selectedCourse.modules.map((module, index) => (
                  <div key={index} className="mb-4">
                    <h5 className="font-medium text-gray-800">
                      {module.title}
                    </h5>
                    <ul className="list-disc list-inside ml-4">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="text-gray-600">
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  className="w-full px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => navigate(`/app/course/${selectedCourse.id}`)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoursesPage;
