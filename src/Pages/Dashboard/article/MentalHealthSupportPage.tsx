import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for the back button

const MentalHealthSupportPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleBackClick = () => {
    navigate(-1);  // Go back to the previous page
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen text-white flex items-center justify-center p-10">
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white text-gray-900 rounded-3xl shadow-lg p-8 space-y-6">
        <div className="flex justify-between items-center">
          <button
            onClick={handleBackClick}
            className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          >
            &#8592; Back
          </button>
          <h1 className="text-4xl font-extrabold text-center text-purple-700">Mental Health Support Services</h1>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          Mental health is an essential part of overall well-being. Whether you're experiencing emotional distress, anxiety, depression, or just need someone to talk to, there are numerous support services available to help you navigate through tough times. In this article, we'll explore different types of mental health support services and how to access them.
        </p>

        <section>
          <h2 className="text-3xl font-semibold text-purple-600 mb-4">Types of Mental Health Support Services</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <strong>1. Counseling and Therapy:</strong> Professional therapists and counselors offer a safe and confidential space to talk through personal challenges. Therapy can help individuals better understand their thoughts and emotions and provide tools for managing them.
            </li>
            <li>
              <strong>2. Support Groups:</strong> Many people benefit from talking to others who are going through similar experiences. Support groups provide a sense of community and a space to share coping strategies and personal stories.
            </li>
            <li>
              <strong>3. Crisis Helplines:</strong> Crisis helplines offer immediate assistance to individuals in distress. These services are available 24/7 and provide emotional support, advice, and guidance during moments of crisis.
            </li>
            <li>
              <strong>4. Psychiatric Services:</strong> If someone is dealing with severe mental health conditions, psychiatric services may be necessary. These services can include medication management and diagnostic evaluations from licensed psychiatrists.
            </li>
            <li>
              <strong>5. Employee Assistance Programs (EAP):</strong> Many employers offer Employee Assistance Programs that provide confidential counseling and support to employees dealing with personal or professional stressors.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-purple-600 mt-8 mb-4">How to Access Mental Health Support</h2>
          <p className="text-lg text-gray-700 mb-4">
            It's important to know where to go for help when you or someone you know is experiencing mental health difficulties. Here are several ways to access mental health support:
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <strong>1. Visit Your Primary Care Provider:</strong> If you're unsure where to start, your primary care doctor is a good first step. They can provide referrals to mental health professionals, offer initial counseling, or prescribe medications if necessary.
            </li>
            <li>
              <strong>2. Search for Local Mental Health Clinics:</strong> Many cities have clinics that specialize in mental health services. These clinics often offer sliding scale fees based on income and can connect you with the right professionals.
            </li>
            <li>
              <strong>3. Look for Online Therapy Platforms:</strong> If in-person therapy is not an option, online platforms like BetterHelp, Talkspace, or 7 Cups provide virtual therapy and support via text, video, or phone calls.
            </li>
            <li>
              <strong>4. Call Crisis Helplines:</strong> If you or someone you know is in immediate distress, calling a crisis helpline can provide instant support. Services such as the National Suicide Prevention Lifeline or local emergency helplines can connect you with trained professionals who can guide you.
            </li>
            <li>
              <strong>5. Use Employee Assistance Programs (EAP):</strong> If your workplace offers an EAP, they can connect you to confidential support services, including counseling, therapy, and legal or financial advice.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-purple-600 mt-8 mb-4">Local Resources for Mental Health Support</h2>
          <p className="text-lg text-gray-700 mb-4">
            Here are a few examples of local resources where you can access mental health support services:
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <strong>1. Local Hospitals and Health Centers:</strong> Many hospitals have mental health departments that provide psychiatric care, therapy, and crisis intervention.
            </li>
            <li>
              <strong>2. Community Health Organizations:</strong> Non-profit organizations often provide counseling services, crisis support, and referrals to mental health professionals. Look for resources in your community that are accessible to all.
            </li>
            <li>
              <strong>3. University Counseling Services:</strong> Many universities and colleges offer mental health support to students. If you're a student, check with your institution's counseling center for resources.
            </li>
            <li>
              <strong>4. 24/7 Crisis Services:</strong> Local crisis centers provide immediate support during mental health emergencies. These services offer trained professionals who can help manage acute mental health crises.
            </li>
          </ul>
        </section>

        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthSupportPage;
