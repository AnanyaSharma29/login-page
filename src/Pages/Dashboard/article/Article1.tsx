import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for the back button

const StressAnxietyPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleBackClick = () => {
    navigate(-1);  // Go back to the previous page
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-700 min-h-screen text-white flex items-center justify-center p-10">
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white text-gray-900 rounded-3xl shadow-lg p-8 space-y-6">
        <div className="flex justify-between items-center">
          <button
            onClick={handleBackClick}
            className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          >
            &#8592; Back
          </button>
          <h1 className="text-4xl font-extrabold text-center text-indigo-700">Managing Stress and Anxiety</h1>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          In today's fast-paced world, stress and anxiety have become part of daily life. Whether caused by work pressure, personal relationships, or the ever-increasing demands of modern society, managing these emotions is crucial for maintaining mental and physical well-being. Learning effective strategies to handle stress and anxiety can help you regain control, enhance your resilience, and foster a healthier, more balanced life.
        </p>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Effective Stress Management Techniques</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <strong>1. Practice Mindfulness:</strong> Mindfulness techniques like deep breathing, meditation, and yoga help you stay present and calm, reducing the stress response. By focusing on the present moment, you prevent your mind from spiraling into anxiety.
            </li>
            <li>
              <strong>2. Regular Exercise:</strong> Physical activity can be a powerful antidote to stress. Whether it’s a simple walk, jog, or more intense activities like weightlifting or swimming, exercise releases endorphins that naturally boost your mood.
            </li>
            <li>
              <strong>3. Time Management:</strong> Feeling overwhelmed can often lead to stress. Organize your time effectively by breaking tasks into smaller, achievable steps. Create a to-do list or schedule to manage deadlines and reduce the mental clutter.
            </li>
            <li>
              <strong>4. Stay Connected:</strong> Social support is key in reducing anxiety. Talking to friends, family, or even a therapist can help you process emotions and gain a new perspective. It’s okay to seek help when needed.
            </li>
            <li>
              <strong>5. Adequate Sleep:</strong> Never underestimate the power of sleep. Restful sleep is essential for your body and mind to recover. Create a relaxing bedtime routine, avoid screen time before bed, and aim for 7-9 hours of sleep each night.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mt-8 mb-4">Additional Tips for Long-Term Stress Reduction</h2>
          <p className="text-lg text-gray-700 mb-4">
            In addition to immediate stress-relief techniques, here are some long-term strategies that can help you reduce stress and anxiety on an ongoing basis:
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <strong>1. Develop Healthy Habits:</strong> Consistent habits like eating a balanced diet, practicing regular exercise, and prioritizing self-care can enhance your resilience to stress. It’s about building a lifestyle that promotes well-being.
            </li>
            <li>
              <strong>2. Practice Gratitude:</strong> Focusing on the positive aspects of life can shift your mindset. Make it a daily practice to write down or reflect on things you’re grateful for. This simple habit can significantly boost your mental health.
            </li>
            <li>
              <strong>3. Limit Social Media Use:</strong> Constant exposure to negative news and unrealistic expectations on social media can heighten feelings of stress and anxiety. Consider reducing your screen time and engaging in more real-life interactions.
            </li>
            <li>
              <strong>4. Learn to Say No:</strong> Setting boundaries is an important skill. If you’re constantly taking on too much, it’s okay to say no. Protect your time and energy by being mindful of your commitments.
            </li>
            <li>
              <strong>5. Engage in Hobbies:</strong> Hobbies can provide a healthy escape from everyday pressures. Whether it’s reading, painting, gardening, or any other creative activity, make time for things that bring you joy and relaxation.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mt-8 mb-4">The Power of Reflection and Self-Compassion</h2>
          <p className="text-lg text-gray-700 mb-4">
            Reflecting on your emotions and practicing self-compassion are powerful tools in managing stress and anxiety. When stress arises, take a moment to pause and identify the root cause. Instead of criticizing yourself for feeling stressed, practice self-compassion by acknowledging your emotions and treating yourself with kindness.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Remember, managing stress is a journey, not a destination. Every small step you take toward understanding and reducing stress will contribute to a more peaceful and fulfilling life.
          </p>
        </section>

        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default StressAnxietyPage;
