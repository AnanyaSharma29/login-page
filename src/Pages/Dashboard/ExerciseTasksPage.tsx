import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Task {
  id: string;
  name: string;
  description: string;
  done: boolean;
}

const ExerciseTasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string>(''); // Error state for validation

  // Fetch tasks on component load
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/exercise-tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  // Add new task with validation
  const addTask = async () => {
    // Validate task name and description
    if (taskName.trim().length < 3) {
      setError('Task name must be at least 3 characters long');
      return;
    }

    if (description.trim().length < 5) {
      setError('Task description must be at least 5 characters long');
      return;
    }

    setError(''); // Clear error if validation passes

    try {
      const response = await axios.post('http://localhost:8080/api/exercise-tasks', {
        name: taskName,
        description: description,
        done: false, // New task is initially not done
      });

      // Update tasks state
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setTaskName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  // Delete task
  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/api/exercise-tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  // Mark task as done (toggle status)
  const markAsDone = async (id: string, currentStatus: boolean) => {
    try {
      const updatedTask = { done: !currentStatus };
      await axios.put(`http://localhost:8080/api/exercise-tasks/${id}`, updatedTask);

      setTasks(tasks.map((task) =>
        task.id === id ? { ...task, done: !currentStatus } : task
      ));
    } catch (error) {
      console.error('Error updating task status', error);
    }
  };

  // Fetch tasks when component loads
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Title Section */}
      <h1 className="text-3xl font-bold text-center mb-6">Exercise Tasks</h1>

      {/* Validation Error Message */}
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

      {/* Task Input Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-2 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 border rounded-lg shadow-md ${task.done ? 'bg-gray-200 line-through' : 'bg-white'}`}
          >
            <h4 className="font-semibold text-blue-700">{task.name}</h4>
            <p className="text-sm text-gray-600">{task.description}</p>
            <div className="mt-4 flex justify-between items-center">
              {/* Mark as Done button */}
              <button
                onClick={() => markAsDone(task.id, task.done)}
                className="text-green-500 hover:text-green-700"
              >
                {task.done ? 'Undo' : 'Done'}
              </button>

              {/* Delete button */}
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseTasksPage;
