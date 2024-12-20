import React, { useState, useEffect } from "react";

// Interface for the widget data
interface DashboardWidgetData {
  title: string;
  value: string;
  bgColor: string;
  appointments?: string[];  // Optional field for appointments
}

const DashboardWidgets: React.FC = () => {
  // Sample mock data
  const [widgetsData, setWidgetsData] = useState<DashboardWidgetData[]>([]);

  // Simulate fetching data from an API or backend
  useEffect(() => {
    const mockData: DashboardWidgetData[] = [
      {
        title: "Today's Appointments",
        value: "5 scheduled",
        bgColor: "bg-teal-500",
        appointments: [
          "John Doe - 10:00 AM",
          "Jane Smith - 11:30 AM",
        ],
      },
      {
        title: "Pending Messages",
        value: "8 unread",
        bgColor: "bg-blue-500",
      },
      {
        title: "Upcoming Events",
        value: "2 events",
        bgColor: "bg-green-500",
      },
    ];

    // Set the mock data after 1 second to simulate an API call
    setTimeout(() => {
      setWidgetsData(mockData);
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {widgetsData.length > 0 ? (
        widgetsData.map((widget, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg p-6 ${widget.bgColor} text-white transition-transform transform hover:scale-105 hover:shadow-xl`}
          >
            <h3 className="text-2xl font-semibold mb-4">{widget.title}</h3>
            <p className="text-lg font-medium">{widget.value}</p>

            {/* If the widget has appointments, display them */}
            {widget.appointments && widget.appointments.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold">Appointments:</h4>
                <ul className="list-disc pl-5 mt-2">
                  {widget.appointments.map((appointment, idx) => (
                    <li key={idx} className="text-sm">{appointment}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Loading widget data...</p>
      )}
    </div>
  );
};

export default DashboardWidgets;
