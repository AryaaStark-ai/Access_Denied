import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/auth/LandingPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignUpPage from "./pages/auth/SignUpPage";
import ProfilePage from "./pages/app/ProfilePage";
import DashboardPage from "./pages/app/DashboardPage";
import CoursesPage from "./pages/app/CoursesPage";
import CoursePage from "./pages/app/CoursePage";
import LessonsPage from "./pages/app/LessonsPage";
import LessonPage from "./pages/app/LessonPage";
import LeaderBoardPage from "./pages/app/LeaderBoardPage";
import AchievementsPage from "./pages/app/AchievementsPage";
import NotFoundPage from "./pages/auth/NotFoundPage";
import AppLayout from "./components/ui/AppLayout.jsx";
import CourseDetails from "./Pages/app/CourseDetails";
import FriendsPage from "./pages/app/FriendsPage.jsx";
import FocusRoomsPage from "./pages/app/FocusRooms.jsx";

function App() {
  return (
    <div className="App h-screen w-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} index />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="courseDetails" element={<CourseDetails />} />
          <Route path="profile/:id" element={<ProfilePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="course/:id" element={<CoursePage />} />
          <Route path="lessons" element={<LessonsPage />} />
          <Route path="lesson/:id" element={<LessonPage />} />
          <Route path="leaderboard" element={<LeaderBoardPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="friends" element={<FriendsPage />} />
          <Route path="focusrooms" element={<FocusRoomsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default App;
