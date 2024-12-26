import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './Pages/Dashboard/HomePage';
import LoginPage from './Pages/Authentication/LoginPage';
import SignUpPage from './Pages/Authentication/SignUpPage';
import Dashboard from './Pages/Dashboard/DashBoard';
import ProfilePage from './Pages/Dashboard/ProfilePage';
import ContactUs from './Pages/Dashboard/ContactUS';
import AboutUs from './Pages/Dashboard/AboutUs';
import ServicesPage from './Pages/Dashboard/ServicesPage';
import ServiceDailyTask from './Pages/Dashboard/ServiceDailyTask';
import EmergencyContact from './Pages/Dashboard/EmergencyContact';
import SelfAssessmentForm from './Pages/Dashboard/SelfAssessmentForm';
import ServiceMusic from './Pages/Dashboard/RelaxingMusicPage';
import ConsultantDashboard from './Pages/Consultant/ConsultandDashboard';
import './index.css';
import BookAppointment from './Pages/Dashboard/BookAppointment';
import MotivationalThoughts from './Pages/Dashboard/MotivationalThoughts';
import Article1 from './Pages/Dashboard/article/Article1';
import Article2 from './Pages/Dashboard/article/EmotionalDistressPage';
import Article3 from './Pages/Dashboard/article/MentalHealthSupportPage';
import UserConsultant from './Pages/Authentication/UserConsultant';
import ConsultantSignup from './Pages/Authentication/ConsultantSignup';
import ConsultantLogin from './Pages/Authentication/ConsultantLogin';
import MoodTrackingForm from './Pages/Dashboard/MoodTrackingForm';
import Calendar from './Pages/Consultant/Calendar';
import Clients from './Pages/Consultant/Clients';
import Availability from './Pages/Consultant/Availability';
import Messages from './Pages/Consultant/Messages';
import Settings from './Pages/Consultant/Settings';
import MusicPlayer from './Pages/components/MusicPlayer';
import ExerciseTasksPage from './Pages/Dashboard/ExerciseTasksPage';
import Header from './Pages/components/Header'; // Header Component

function App() {
  const location = useLocation();

  // Define the routes where Header should not be displayed
  const noHeaderRoutes = [
    '/consultant-login',
    '/consultant-dashboard',
    '/user-dashboard',
  ];

  // Determine if Header should be displayed
  const showHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <div>
      {/* Render Header conditionally */}
      {showHeader && <Header />}

      {/* MusicPlayer added globally */}
      <MusicPlayer />

      <Routes>
        {/* General Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/consultant-dashboard" element={<ConsultantDashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/article-1" element={<Article1 />} />
        <Route path="/article-2" element={<Article2 />} />
        <Route path="/article-3" element={<Article3 />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Service Routes */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/daily-task" element={<ServiceDailyTask />} />
        <Route path="/service/music" element={<ServiceMusic />} />
        <Route path="/service/motivational-thoughts" element={<MotivationalThoughts />} />
        <Route path="/service/mood-tracking" element={<MoodTrackingForm />} />

        {/* Exercise Task Route */}
        <Route path="/service/exercise-tasks" element={<ExerciseTasksPage />} />

        {/* Tools and Emergency */}
        <Route path="/emergency-contacts" element={<EmergencyContact />} />
        <Route path="/self-assessment-tools" element={<SelfAssessmentForm />} />

        {/* Consultant Routes */}
        <Route path="/login-page" element={<UserConsultant />} />
        <Route path="/signup-page" element={<UserConsultant />} />
        <Route path="/consultant-signup" element={<ConsultantSignup />} />
        <Route path="/consultant-login" element={<ConsultantLogin />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
