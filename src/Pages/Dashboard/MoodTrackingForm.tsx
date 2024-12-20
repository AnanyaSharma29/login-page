import React, { useState } from 'react';

const MoodTrackingForm: React.FC = () => {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');
  const [answers, setAnswers] = useState({ sleep: '', energy: '', stress: '' });
  const [submitted, setSubmitted] = useState(false);
  const [suggestion, setSuggestion] = useState('');

  const analyzeMood = () => {
    let suggestionText = '';

    if (mood === 'Happy 😊') {
      suggestionText = 'Keep smiling and spreading the positivity! 🌟 Treat yourself to something nice today.';
    } else if (mood === 'Sad 😔') {
      suggestionText = "It's okay to feel sad sometimes. 🌧 Take a deep breath and try watching your favorite movie or calling a loved one.";
    } else if (mood === 'Anxious 😟') {
      suggestionText = "Take a moment to ground yourself. 💆 Try a few deep breaths or a short walk to ease your mind.";
    } else if (mood === 'Angry 😠') {
      suggestionText = 'Take some time to cool off. 😌 Listening to calming music or writing your feelings down may help.';
    } else if (mood === 'Neutral 😐') {
      suggestionText = "You seem balanced today! Why not try something new or creative to spark joy? 🎨";
    } else if (mood === 'Calm 😌') {
      suggestionText = "You're in a great state of mind! 🌿 Keep nurturing this calm with some relaxing music or reading.";
    }

    // Add insights based on answers to additional questions
    if (answers.sleep === 'Poor') {
      suggestionText += '\nTip: A good night’s sleep can improve your mood. Try winding down with a book or herbal tea tonight. 🌙';
    } else if (answers.energy === 'Low') {
      suggestionText += "\nMotivation: Even small steps matter! 💪 Go for a walk, stretch, or play some upbeat music to re-energize.";
    } else if (answers.stress === 'High') {
      suggestionText += "\nReminder: You’ve got this! 🧘‍♀️ Take a 5-minute break to focus on your breath and reset your mind.";
    }

    return suggestionText;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const moodSuggestion = analyzeMood();
    setSuggestion(moodSuggestion);
    setSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A3D8F4] to-[#F9F9F9] flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#00509E] mb-4">
          Mood Tracking Form
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Share your thoughts and receive personalized insights to brighten your day!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Mood Selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                How are you feeling today?
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-[#00A896]"
              >
                <option value="" disabled>
                  Select your mood
                </option>
                <option value="Happy 😊">Happy 😊</option>
                <option value="Calm 😌">Calm 😌</option>
                <option value="Neutral 😐">Neutral 😐</option>
                <option value="Sad 😔">Sad 😔</option>
                <option value="Anxious 😟">Anxious 😟</option>
                <option value="Angry 😠">Angry 😠</option>
              </select>
            </div>

            {/* Additional Questions */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                How was your sleep last night?
              </label>
              <select
                onChange={(e) => handleInputChange('sleep', e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-[#00A896]"
              >
                <option value="">Select</option>
                <option value="Great">Great 😴</option>
                <option value="Okay">Okay 🛌</option>
                <option value="Poor">Poor 😩</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                How's your energy level today?
              </label>
              <select
                onChange={(e) => handleInputChange('energy', e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-[#00A896]"
              >
                <option value="">Select</option>
                <option value="High">High ⚡</option>
                <option value="Moderate">Moderate 🙂</option>
                <option value="Low">Low 😴</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                How stressed are you feeling?
              </label>
              <select
                onChange={(e) => handleInputChange('stress', e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-[#00A896]"
              >
                <option value="">Select</option>
                <option value="Low">Low 🧘</option>
                <option value="Moderate">Moderate 😐</option>
                <option value="High">High 😓</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Anything else you'd like to share?
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Write about your day..."
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-[#00A896]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#00A896] text-white py-2 rounded-lg hover:bg-[#00787A] transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-[#00509E] mb-4">
              Here’s something for you:
            </h2>
            <p className="text-gray-600 whitespace-pre-wrap">{suggestion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodTrackingForm;
