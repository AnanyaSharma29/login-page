import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook

const MentalHealthAssessment: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState(false); // State to track if results are saved
  const [saving, setSaving] = useState(false); // State to track if saving is in progress
  const email = localStorage.getItem("userEmail"); // Retrieve email from localStorage
  const navigate = useNavigate(); // Hook for navigating to other pages

  const allQuestions = [
    "How often do you feel anxious or worried?",
    "How often do you feel down, depressed, or hopeless?",
    "Do you have trouble sleeping or staying asleep?",
    "How often do you feel tired or have little energy?",
    "Do you find it hard to concentrate on tasks?",
    "How often do you lose interest in activities you once enjoyed?",
    "How often do you feel overwhelmed by daily tasks?",
    "Do you struggle to control feelings of anger or frustration?",
    "Do you feel isolated or disconnected from others?",
    "Do you have thoughts of harming yourself or others?",
    "How often do you experience physical symptoms like headaches or nausea due to stress?",
    "Do you feel like you are achieving a balance between work and personal life?",
    "How often do you feel satisfied with your personal relationships?",
    "Do you feel supported by friends or family when facing challenges?",
    "How often do you experience feelings of guilt or worthlessness?",
    "Do you find it difficult to control your eating habits?",
    "How often do you feel irritable or short-tempered?",
    "Do you experience panic attacks or sudden feelings of fear?",
    "How often do you feel optimistic about the future?",
    "Do you struggle with making decisions, even simple ones?",
    "How often do you feel motivated to pursue your goals?",
    "Do you have trouble managing time effectively?",
    "How often do you feel overwhelmed by social interactions?",
    "Do you feel confident in your ability to handle daily responsibilities?",
    "How often do you avoid situations due to fear or anxiety?",
    "Do you feel comfortable seeking help when needed?",
    "How often do you reflect positively on your achievements?",
    "Do you feel physically healthy and energetic?",
    "How often do you feel in control of your emotions?",
    "Do you find it easy to relax and unwind?",
  ];

  useEffect(() => {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setSelectedQuestions(selected);
    setAnswers(new Array(selected.length).fill(0));
  }, []);

  const handleAnswerChange = (index: number, score: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = score;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    if (answers.includes(0)) {
      alert("Please answer all questions before submitting.");
    } else {
      setSubmitted(true);
    }
  };

  const handleSave = async () => {
    setSaving(true); // Show loading state

    if (!email) {
      alert("No user is logged in. Please log in again.");
      setSaving(false); // Reset saving state
      return;
    }

    try {
      const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
      const feedback = getFeedback(totalScore);

      const response = await axios.post(
        `http://localhost:8080/api/assessment/${email}`,
        { questions: selectedQuestions, answers, totalScore, feedback }
      );

      if (response.status === 200) {
        setSaved(true); // Set the 'saved' state to true
        alert("Results saved successfully!"); // Show a prompt immediately
      }
    } catch (error) {
      console.error("Error saving results:", error);
      alert("Failed to save results. Please try again.");
    } finally {
      setSaving(false); // Reset saving state
    }
  };

  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);

  const getFeedback = (score: number) => {
    if (score <= 10) return "Your mental health seems stable. Keep maintaining a healthy lifestyle.";
    if (score <= 20) return "You might be experiencing mild stress. Consider practicing mindfulness or talking to a friend.";
    if (score <= 30) return "You could be experiencing moderate distress. Seeking professional help might be beneficial.";
    return "You seem to be in significant distress. Please reach out to a mental health professional immediately.";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Mental Health Self-Assessment</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {!submitted ? (
          <>
            {selectedQuestions.map((question, index) => (
              <div key={index} className="mb-6">
                <p className="mb-3 text-lg font-medium text-gray-800">
                  {index + 1}. {question}
                </p>
                <div className="flex justify-between">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <label key={score} className="flex flex-col items-center text-sm">
                      <input
                        type="radio"
                        name={`question-${index}`} // Corrected to use template literals
                        value={score}
                        onChange={() => handleAnswerChange(index, score)}
                        className="accent-blue-600"
                      />
                      <span>{score}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className=" text-2xl font-bold mb-4">Your Score: {totalScore}</h2>
            <p className="text-gray-700 text-lg">{getFeedback(totalScore)}</p>

            <div className="flex flex-col gap-4 mt-6">
              <button
                onClick={() => window.location.reload()}
                className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
              >
                Retake Assessment
              </button>
              {saved ? (
                <p className="text-green-700 font-semibold text-lg">
                  Results have been saved successfully!
                </p>
              ) : (
                <button
                  onClick={handleSave}
                  className={`bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ${saving && "cursor-not-allowed opacity-50"}`}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Results"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentalHealthAssessment;