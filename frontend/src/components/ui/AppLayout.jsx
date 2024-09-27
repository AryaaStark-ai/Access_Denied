import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBook, FaMedal } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { FcConferenceCall } from "react-icons/fc";

function AppLayout() {
  const [state, setState] = React.useState(false);
  const { pathname } = useLocation();
  const locationToListItemMap = {
    "/app/dashboard": "Dashboard",
    "/app/profile/34": "Profile",
    "/app/courses": "Courses",
    "/app/leaderboard": "Leaderboard",
    "/app/achievements": "Achievements",
    "/app/course/1": "Course",
    "/app/lessons": "Lessons",
  };
  const [activeOption, setActiveOption] = React.useState(
    locationToListItemMap[pathname]
  );

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="sidebar h-screen w-64">
        <Link to="/">
          <div className="logo flex items-center gap-4 w-full p-4">
            <FaGraduationCap className="text-5xl" />
            <span className="text-xl">Gamified</span>
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <SidebarItem
                icon={<FaHome />}
                text="Dashboard"
                link="/app/dashboard"
                activeOption={activeOption}
                state={state}
                setActiveOption={setActiveOption}
              />
            </li>
            <li>
              <SidebarItem
                icon={<FaUser />}
                text="Profile"
                link="/app/profile/1"
                activeOption={activeOption}
                state={state}
                setActiveOption={setActiveOption}
              />
            </li>
            <li>
              <SidebarItem
                icon={<FaBook />}
                text="Courses"
                link="/app/courses"
                activeOption={activeOption}
                state={state}
                setActiveOption={setActiveOption}
              />
            </li>
            <li>
              <SidebarItem
                icon={<MdLeaderboard />}
                text="Leaderboard"
                link="/app/leaderboard"
                activeOption={activeOption}
                state={state}
                setActiveOption={setActiveOption}
              />
            </li>
            <li>
              <SidebarItem
                icon={<FaMedal />}
                text="Acheivements"
                link="/app/achievements"
                activeOption={activeOption}
                state={state}
                setActiveOption={setActiveOption}
              />
            </li>
            <li>
              <SidebarItem
                icon={<FaBook />}
                text="Learn"
                link="/app/course/1"
                activeOption={activeOption}
                state={state}
                setActiveOption={setActiveOption}
              />
            </li>
            <li>
              <SidebarItem
                icon={<FaUserFriends />}
                text="Friends"
                link="/app/friends"
                activeOption={activeOption}
                state={state}
                setActiveOption={setActiveOption}
              />
            </li>
            <li>
              <SidebarItem
                icon={<FcConferenceCall />}
                text="Focus Rooms"
                link="/app/focusrooms"
                activeOption={activeOption}
                state={state}
                setActiveOption={setActiveOption}
              />
            </li>
            <li>
              <SidebarItem
                icon={<IoIosLogOut />}
                text="Logout"
                link="/"
                activeOption={activeOption}
                state={state}
                setActiveOption={setActiveOption}
              />
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow">
        <Outlet className="" />
      </div>
    </div>
  );
}

const SidebarItem = ({
  icon,
  text,
  link,
  activeOption,
  state,
  setActiveOption,
}) => {
  const active = activeOption === text;
  return (
    <Link
      to={link}
      className={`menu-link w-full flex items-center p-4 cursor-pointer transition-all text-xl 
          ${
            active
              ? "bg-gradient-to-tr from-blue-marguerite-200 to-blue-marguerite-100 text-black"
              : "hover:bg-babyPowder text-gray-600"
          }`}
      onClick={() => setActiveOption(text)}
    >
      <div className={`w-full flex items-center gap-4`}>
        <span className="text-blue-marguerite-500 text-3xl ml-4">{icon}</span>
        <span className={`${state && "hidden"}`}>{text}</span>
      </div>
    </Link>
  );
};

export default AppLayout;
