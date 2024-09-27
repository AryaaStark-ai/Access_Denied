import React, { useEffect, useRef } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import CourseTimeline from "../../components/ui/CourseTimeline";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

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

const MyProgress = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the timeline by default (optional)
    if (timelineRef.current) {
      timelineRef.current.scrollTop = timelineRef.current.scrollHeight;
    }
  }, []);

  // Example data for line graph (Time vs Lessons Completed)
  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Lessons Completed",
        data: [5, 15, 25, 30],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  // Example data for doughnut chart (Course Completion Status)
  const doughnutData = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [
      {
        label: "Courses Status",
        data: [6, 3, 1],
        backgroundColor: ["#10B981", "#F59E0B", "#EF4444"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex h-screen p-8 space-x-4">
      {/* Left half: Timeline of learner's history */}
      <div
        className="w-1/2 h-full bg-white rounded-lg shadow-lg p-4 overflow-auto"
        ref={timelineRef}
      >
        <h2 className="text-xl font-semibold mb-4">
          Course and Lesson History
        </h2>
        <div className="space-y-4">
          <CourseTimeline />
        </div>
      </div>

      {/* Right half: Two progress charts */}
      <div className="w-1/2 h-full flex flex-col space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6 h-1/2">
          <h2 className="text-xl font-semibold mb-4">
            Lessons Completed Over Time
          </h2>
          <Line data={lineData} />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 h-1/2">
          <h2 className="text-xl font-semibold mb-4">
            Course Completion Status
          </h2>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default MyProgress;
