import React from "react";
import { Clock } from "lucide-react";

const courses = [
  {
    title: "Introduction to React",
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
];

const TimelineItem = ({ title, duration, isLeft }) => (
  <div
    className={`flex ${
      isLeft ? "flex-row" : "flex-row-reverse"
    } items-center w-full my-4`}
  >
    <div className={`w-5/12 ${isLeft ? "text-right pr-4" : "text-left pl-4"}`}>
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="flex items-center text-sm text-gray-600 mt-1 justify-end">
        <Clock size={14} className="mr-1" />
        <span>{duration}</span>
      </div>
    </div>
    <div className="w-2/12 flex justify-center">
      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
    </div>
    <div className="w-5/12"></div>
  </div>
);

const ModuleSection = ({ title, lessons }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
      {title}
    </h2>
    {lessons.map((lesson, index) => (
      <TimelineItem
        key={index}
        title={lesson.title}
        duration={lesson.duration}
        isLeft={index % 2 === 0}
      />
    ))}
  </div>
);

const CourseTimeline = () => (
  <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 z-40">
      {courses[0].title}
    </h1>
    <div className="relative z-0">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>
      {courses[0].modules.map((module, index) => (
        <ModuleSection
          key={index}
          title={module.title}
          lessons={module.lessons}
        />
      ))}
    </div>
  </div>
);

export default CourseTimeline;
