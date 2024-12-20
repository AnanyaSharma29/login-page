import React, { useState, useEffect } from 'react';

const DailyWellbeingTasks: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<boolean[]>([false, false]);

  // List of tasks
  const allTasks = [
    "Take a 10-minute walk in nature and focus on your breathing.",
    "Write down three things you are grateful for today.",
    "Spend 15 minutes meditating or practicing mindfulness.",
    "Call or message a friend to catch up and share a positive memory.",
    "Listen to your favorite song and sing along or dance to it.",
    "Spend 10 minutes journaling about your thoughts and feelings.",
    "Try a simple stretching routine to relieve tension in your body.",
    "Drink a glass of water and take a few deep breaths.",
    "Spend 15 minutes doing something creative, like drawing or writing.",
    "Read a chapter from a book or a short article that inspires you.",
    "Practice a random act of kindness, like complimenting someone.",
    "Watch a funny video or movie to make yourself laugh.",
    "Declutter a small space, like your desk or a drawer.",
    "Prepare and enjoy a healthy snack or meal.",
    "Try a grounding exercise, like naming five things you see around you.",
    "Do a breathing exercise: inhale for 4 seconds, hold for 7, and exhale for 8.",
    "Visualize a place that makes you feel calm and happy.",
    "Spend time with a pet or look at photos of animals.",
    "Write a positive affirmation and repeat it to yourself throughout the day.",
    "Take a break from screens and spend 10 minutes outdoors."
  ];

  // Select two tasks for the day based on the current date
  useEffect(() => {
    const dayIndex = new Date().getDay();
    const startIndex = (dayIndex * 2) % allTasks.length;
    const selectedTasks = [
      allTasks[startIndex],
      allTasks[(startIndex + 1) % allTasks.length]
    ];
    setTasks(selectedTasks);
    setCompletedTasks([false, false]);
  }, []);

  // Mark task as completed
  const handleTaskCompletion = (index: number) => {
    const updatedTasks = [...completedTasks];
    updatedTasks[index] = true;
    setCompletedTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Your Daily Wellbeing Tasks</h1>
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full">
        {tasks.map((task, index) => (
          <div key={index} className="mb-6 flex justify-between items-center">
            <p className={`text-lg font-medium ${completedTasks[index] ? 'line-through text-gray-400' : 'text-gray-800'}`}>{
              `${index + 1}. ${task}`
            }</p>
            {!completedTasks[index] ? (
              <button
                onClick={() => handleTaskCompletion(index)}
                className="bg-green-600 text-white py-1 px-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
              >
                Mark as Done
              </button>
            ) : (
              <span className="text-green-600 font-semibold">Completed</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyWellbeingTasks;
