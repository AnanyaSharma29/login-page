import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for the back button

const EmotionalDistressPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleBackClick = () => {
    navigate(-1);  // Go back to the previous page
  };

  return (
    <div className="bg-gradient-to-br from-pink-500 to-red-600 min-h-screen text-white flex items-center justify-center p-10">
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white text-gray-900 rounded-3xl shadow-lg p-8 space-y-6">
        <div className="flex justify-between items-center">
          <button
            onClick={handleBackClick}
            className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          >
            &#8592; Back
          </button>
          <h1 className="text-4xl font-extrabold text-center text-red-700">Coping with Emotional Distress</h1>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          Emotional distress is a natural response to life's challenges, whether caused by personal loss, work-related pressure, or difficult situations. Coping effectively with emotional distress is essential to maintain your emotional health and overall well-being. In this article, we will explore various coping strategies and how you can seek support during tough times.
        </p>

        <section>
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Effective Coping Strategies for Emotional Distress</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <strong>1. Acknowledge Your Emotions:</strong> The first step in coping with emotional distress is to recognize and accept your emotions. Denying your feelings can lead to greater stress. Allow yourself to feel, process, and express your emotions without judgment.
            </li>
            <li>
              <strong>2. Practice Relaxation Techniques:</strong> Deep breathing exercises, progressive muscle relaxation, and mindfulness meditation can help alleviate emotional tension and calm the mind. These techniques activate the parasympathetic nervous system, reducing stress and promoting relaxation.
            </li>
            <li>
              <strong>3. Engage in Physical Activity:</strong> Regular physical exercise can improve mood and reduce anxiety by increasing the production of endorphins. Even a simple walk in nature can help clear your mind and provide emotional relief.
            </li>
            <li>
              <strong>4. Seek Professional Help:</strong> If you're feeling overwhelmed, consider speaking with a therapist or counselor. Professional help can provide valuable tools and support to help you manage your emotions and develop healthy coping strategies.
            </li>
            <li>
              <strong>5. Create a Supportive Environment:</strong> Surround yourself with understanding and compassionate people. Whether it's friends, family, or support groups, social connections can help you feel supported and less isolated during tough times.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-red-600 mt-8 mb-4">Long-Term Strategies for Emotional Well-Being</h2>
          <p className="text-lg text-gray-700 mb-4">
            In addition to immediate coping techniques, long-term strategies are essential for building emotional resilience and maintaining mental well-being over time. These strategies help you become more equipped to deal with life's challenges.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <strong>1. Build a Strong Support System:</strong> Having a reliable support network is crucial for managing emotional distress. Whether it’s a group of friends, family members, or colleagues, knowing that someone is there for you can provide comfort during tough times.
            </li>
            <li>
              <strong>2. Practice Self-Compassion:</strong> Be kind to yourself, especially during periods of emotional distress. Avoid self-criticism and instead, treat yourself with the same care and empathy you would show to a loved one.
            </li>
            <li>
              <strong>3. Engage in Meaningful Activities:</strong> Finding meaning and purpose in life can create a sense of fulfillment. Engage in activities that align with your values and passions, such as volunteering, creative expression, or personal projects.
            </li>
            <li>
              <strong>4. Focus on Positive Thinking:</strong> Negative thinking patterns can exacerbate emotional distress. Practice focusing on positive aspects of your life and reframe negative thoughts to cultivate a more optimistic outlook.
            </li>
            <li>
              <strong>5. Develop Healthy Habits:</strong> A balanced lifestyle that includes regular sleep, healthy eating, and consistent exercise helps reduce emotional stress and contributes to overall emotional stability.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-red-600 mt-8 mb-4">Seeking Support from Others</h2>
          <p className="text-lg text-gray-700 mb-4">
            It's essential to understand that you don’t have to go through emotional distress alone. Seeking support is a sign of strength, not weakness. Here’s how you can find help:
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <strong>1. Talk to Friends or Family:</strong> Sometimes, sharing your feelings with someone who understands can bring immense relief. Let those close to you know what you're going through so they can offer support.
            </li>
            <li>
              <strong>2. Join Support Groups:</strong> Many people find comfort in joining support groups, either in person or online. These groups provide a space to connect with others facing similar challenges, share experiences, and offer encouragement.
            </li>
            <li>
              <strong>3. Reach Out to a Mental Health Professional:</strong> Therapists, psychologists, and counselors are trained to help individuals cope with emotional distress. Don’t hesitate to reach out for professional guidance.
            </li>
            <li>
              <strong>4. Use Hotlines and Online Resources:</strong> There are many confidential hotlines and online resources available for those struggling with emotional distress. These resources provide immediate support and connect you with professionals who can help.
            </li>
          </ul>
        </section>

        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmotionalDistressPage;
