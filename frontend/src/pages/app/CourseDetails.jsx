import React from "react";
import { FaStar, FaRegBookmark, FaPlay } from "react-icons/fa";

const CourseDetailsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Course Header Section */}
      <div className=" from-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Full-Stack Web Development Course
          </h1>
          <p className="text-lg mb-6">
            Master full-stack web development with real-world projects and
            expert guidance.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="font-semibold">4.9</span>
              <span className="text-gray-200 ml-1">(1,234 ratings)</span>
            </div>
            <span>•</span>
            <span>10,543 students enrolled</span>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/api/placeholder/50/50"
              alt="Instructor"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">Created by Jane Doe</p>
              <p className="text-sm">Senior Developer & Instructor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Course Overview */}
          <div>
            {/* Course Description */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Course Description</h2>
              <p className="text-gray-700 mb-4">
                This course is designed to take you from beginner to
                professional in full-stack development. Learn front-end and
                back-end technologies, database management, and cloud
                deployment.
              </p>
              <p className="text-gray-700">
                You will build real-world projects, understand design
                principles, and master tools like React, Node.js, MongoDB, and
                more. Gain lifetime access and a certificate of completion to
                boost your career.
              </p>
            </section>

            {/* What you'll learn */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "Build responsive websites",
                  "Master React and Node.js",
                  "Understand REST APIs",
                  "Deploy applications on cloud",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaPlay className="text-green-500 mt-1 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Course Requirements */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Basic understanding of HTML, CSS, and JavaScript.</li>
                <li>A computer with a reliable internet connection.</li>
                <li>
                  Eagerness to learn and apply coding skills in real-world
                  projects.
                </li>
              </ul>
            </section>
          </div>

          {/* Right: Course Pricing & Add to Cart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <div className="text-3xl font-bold">$99.99</div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-purple-700 transition duration-300">
                Add to Cart
              </button>
              <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg font-semibold mt-4 hover:bg-purple-50 transition duration-300">
                Buy Now
              </button>
            </div>

            <div className="flex justify-between mb-6">
              <button className="flex items-center text-gray-600 hover:text-purple-600">
                <FaRegBookmark className="mr-2" />
                Save for Later
              </button>
            </div>

            {/* Lessons */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Course Lessons</h2>
              <div className="space-y-4">
                {[
                  "Introduction to Web Development",
                  "HTML & CSS Fundamentals",
                  "JavaScript Advanced Concepts",
                  "Building APIs with Node.js",
                  "React Basics",
                  "Database Integration",
                ].map((lesson, index) => (
                  <div key={index} className="border-b pb-4">
                    <h3 className="font-semibold text-lg">{lesson}</h3>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>4 lectures • 1hr 20min</span>
                      <button className="text-purple-600 hover:underline">
                        Preview
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
