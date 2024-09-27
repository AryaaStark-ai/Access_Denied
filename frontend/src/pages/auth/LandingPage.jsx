import React from "react";
import { FaGraduationCap, FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoShareSocial } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

const textVariants = {
  initial: {
    x: -300,
  },
  animate: {
    x: 0,
    transition: {
      type: "tweet",
      duration: 1,
      ease: "easeInOut",
    },
  },
};

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

const landing_courses = [
  {
    src: "src/assets/course1.jpeg",
    title: "DSA",
    instructor: "Strivers",
    level: "Hard",
    estimatedDuration: "4 weeks",
    description:
      "Learn the basics of React, including components, state, and props.",
  },
  {
    src: "src/assets/course2.jpeg",
    title: "web development",
    instructor: "Hitesh Chaudhary",
    level: "Medium",
    estimatedDuration: "4 weeks",
    description:
      "Learn the basics of React, including components, state, and props.",
  },
  {
    src: "src/assets/course3.jpeg",
    title: "AIML",
    instructor: "Krishna Naik",
    level: "Beginner",
    estimatedDuration: "4 weeks",
    description:
      "Learn the basics of React, including components, state, and props.",
  },
  {
    src: "src/assets/course4.jpeg",
    title: "Web3",
    instructor: "Harikirat Singh",
    level: "Beginner",
    estimatedDuration: "4 weeks",
    description:
      "Learn the basics of React, including components, state, and props.",
  },
];

const projectItem = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm fixed top-0 z-10 w-full border-b-8">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <FaGraduationCap className="text-5xl text-blue-600" />
            <span className="text-3xl font-bold text-gray-800">Gamified</span>
          </div>
          <ul className="hidden md:flex space-x-8 text-xl hover:text-blue-600 hover:shadow-indigo-700 hover:shadow-2xl">
            <li>
              <a href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a
                href="/app/courses"
                className="text-gray-600 hover:text-blue-600"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/app/profile/:id"
                className="text-gray-600 hover:text-blue-600"
              >
                Profile
              </a>
            </li>
          </ul>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h1
                variants={{ imgVariants }}
                initial="initial"
                whileInView="animate"
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              >
                Enhance your skills and{" "}
                <span className="text-blue-600">Learning Experience</span>
              </motion.h1>
              <motion.p
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                className="text-xl text-gray-600 mb-6"
              >
                Our mission is to address challenges of traditional learning
                platforms and enhance student engagement and learning.
              </motion.p>
              <motion.div
                className="flex space-x-4"
                variants={projectBox}
                initial="initial"
                whileInView="animate"
              >
                <motion.button
                  variants={projectItem}
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Create Account
                </motion.button>
                <motion.button
                  variants={projectItem}
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition duration-300"
                >
                  Browse Courses
                </motion.button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                variants={imgVariants}
                initial="initial"
                whileInView="animate"
              >
                <img
                  src="src/assets/course4.jpeg"
                  alt="Learning illustration"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Popular Categories
          </h2>
          <div className="flex flex-wrap gap-4">
            {["Development", "DSA", "IT & Software", "Hackathon", "UI/UX"].map(
              (category) => (
                <span
                  key={category}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              )
            )}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Featured Courses
          </h2>
          <motion.div
            variants={projectBox}
            initial="initial"
            whileInView="animate"
            onClick={() => navigate("/app/courseDetails")}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {landing_courses.map((i) => (
              <motion.div
                variants={projectItem}
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={i.src}
                  alt={`Course ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {i.title}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{i.title}</h3>
                  <p className="text-gray-600 mt-1">{i.instructor}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold">$49.99</span>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition duration-300">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Gamified</h3>
              <p className="text-gray-400">
                Learn, grow, and succeed with our expert-led courses.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <IoShareSocial className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <TiSocialTwitter className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <RiInstagramFill className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Gamified. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
