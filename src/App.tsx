import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePagepublic from './Pages/PublicPages/HomePagepublic';
import ServicesPagepublic from './Pages/PublicPages/ServicesPagepublic';

import HomePage from './Pages/Dashboard/HomePage';
import BlogListPage from './Pages/Dashboard/BlogListPage'; 
import LoginPage from './Pages/Authentication/LoginPage';
import SignUpPage from './Pages/Authentication/SignUpPage';
import Dashboard from './Pages/Dashboard/DashBoard';
import ProfilePage from './Pages/Dashboard/ProfilePage';
import ContactUs from './Pages/Dashboard/ContactUS';
import BlogPage from './Pages/Dashboard/BlogPage';
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
import Request from './Pages/Consultant/Request';
import Settings from './Pages/Consultant/Settings';
import BookingPage from './Pages/Dashboard/BookingPage';
import AllRequestsPage from './Pages/Consultant/AllRequestsPage';
import MusicPlayer from './Pages/components/MusicPlayer';
import ExerciseTasksPage from './Pages/Dashboard/ExerciseTasksPage';
import PublicHeader from './Pages/PublicPages/PublicHeader';
import AboutUspublic from './Pages/PublicPages/AboutUspublic';
import ContactUspublic from './Pages/PublicPages/ContactUSpublic';
import UserHeader from './Pages/components/UserHeader'; //  UserHeader Component

const App: React.FC = () => {
  const location = useLocation();

   // Define the routes where the header should not be shown
   const noHeaderRoutes = ['/user-dashboard', '/consultant-dashboard'];

   // Determine if the current path is in the noHeaderRoutes list
   const shouldShowHeader = !noHeaderRoutes.includes(location.pathname);
 
   // Condition to render PublicHeader for public pages
   const isPublicPage = [
     '/', '/services-public', '/about-public', '/contact-public', '/login', '/signup'
   ].includes(location.pathname);
 
   let headerTitle = 'MindCare'; // Default title
   let navLinks = [
     { to: '/user-dashboard', label: 'Dashboard' },
     { to: '/services', label: 'Services' },
     { to: '/blog', label: 'Blog' },
     { to: '/about', label: 'About' },
     { to: '/contact', label: 'Contact' }
   ];
 
   // Adjust header for dashboard home page
   if (location.pathname === '/dashboard-home') {
     headerTitle = 'MindCare Home';
     navLinks = [
       { to: '/user-dashboard', label: 'Dashboard' },
       { to: '/services', label: 'Services' },
       { to: '/blog', label: 'Blog' },
       { to: '/about', label: 'About' },
       { to: '/contact', label: 'Contact' }
     ];
   }
 
   // Adjust header for service page
   if (location.pathname === '/services') {
     headerTitle = 'MindCare Services';
     navLinks = [
       { to: '/dashboard-home', label: 'Home' },
       { to: '/user-dashboard', label: 'Dashboard' },
       { to: '/blog', label: 'Blog' },
       { to: '/about', label: 'About' },
       { to: '/contact', label: 'Contact' }
     ];
   }
 
   // Adjust for other pages as needed
   if (['/about', '/contact'].includes(location.pathname)) {
     navLinks = [
       { to: '/user-dashboard', label: 'Dashboard' },
       { to: '/services', label: 'Services' },
       { to: '/blog', label: 'Blog' },
       { to: '/about', label: 'About' },
       { to: '/contact', label: 'Contact' }
     ];
   }
 
   // Logout handler
   const handleLogout = () => {
     // Redirect to the public homepage
     window.location.href = '/';
   };
 
   return (
     <div>
       {/* MusicPlayer added globally */}
       <MusicPlayer />
 
       {/* Conditionally render the PublicHeader on public pages or exclude the UserHeader on specific pages */}
       {isPublicPage ? (
         <PublicHeader />
       ) : (
         shouldShowHeader && (
           <UserHeader title={headerTitle} navLinks={navLinks} onLogout={handleLogout} />
         )
       )}
      <Routes>
        {/* General Routes */}
        {/* Public Page as the default */}
        <Route path="/" element={<HomePagepublic />} />
        <Route path="/services-public" element={<ServicesPagepublic />} />
        <Route path="/about-public" element={<AboutUspublic />} />
        <Route path="/contact-public" element={<ContactUspublic />} />
        <Route path="/blogs" element={<BlogListPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<BlogPage />} />

        {/* HomePage for logged-in users */}
        <Route path="/dashboard-home" element={<HomePage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/consultant-dashboard" element={<ConsultantDashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/booking/:consultantId" element={<BookingPage />} />
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
        <Route path="/request" element={<Request />} />
        <Route path="/all-requests" element={<AllRequestsPage />} />
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
