import React, { useState, useEffect } from 'react';

interface Contact {
    id: string; // Unique ID for each contact
    name: string;
    contactNumber: string;
    email: string;
}

const EmergencyContact: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [formData, setFormData] = useState<Contact>({
        id: '',
        name: '',
        contactNumber: '',
        email: '',
    });
    const [message, setMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

    // Load contacts from localStorage on component mount
    useEffect(() => {
        const savedContacts = localStorage.getItem('emergencyContacts');
        if (savedContacts) {
            setContacts(JSON.parse(savedContacts));
        }
    }, []);

    // Save contacts to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddContact = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (contacts.length >= 5) {
            alert('Maximum of 5 contacts allowed!');
            return;
        }

        const newContact = { ...formData, id: Date.now().toString() };
        setContacts([...contacts, newContact]);
        setFormData({ id: '', name: '', contactNumber: '', email: '' });
        setMessage('Contact added successfully!');
        setMessageType('success');

        // Hide the message after 2 seconds
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 2000);
    };

    const handleDeleteContact = (id: string) => {
        setContacts(contacts.filter(contact => contact.id !== id));
        setMessage('Contact deleted successfully!');
        setMessageType('success');

        // Hide the message after 2 seconds
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 2000);
    };

    const handleSOS = () => {
        const savedContacts = localStorage.getItem('emergencyContacts');
        if (savedContacts) {
            const emergencyContacts = JSON.parse(savedContacts) as Contact[];
            console.log('Emergency contacts:', emergencyContacts);
            alert(`SOS sent to:\n${emergencyContacts.map(c => `${c.name}: ${c.contactNumber}`).join('\n')}`);
        } else {
            alert('No emergency contacts saved!');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Emergency Contacts</h2>

            {/* Feedback Message */}
            {message && (
                <div className={`p-4 mb-6 text-white rounded-lg ${messageType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {message}
                </div>
            )}

            {/* Add Contact Section */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-700 mb-5 text-center">Add Emergency Contact</h3>
                <form onSubmit={handleAddContact} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Add Contact
                    </button>
                </form>
            </div>

            {/* Display Contacts Section */}
            <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-5 text-center">Emergency Contacts List</h3>
                <ul className="space-y-6">
                    {contacts.length > 0 ? (
                        contacts.map(contact => (
                            <li
                                key={contact.id}
                                className="p-5 bg-white border border-gray-300 rounded-lg shadow-sm flex justify-between items-center"
                            >
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">{contact.name}</p>
                                    <p className="text-gray-600">📞 {contact.contactNumber}</p>
                                    <p className="text-gray-600">✉️ {contact.email}</p>
                                </div>
                                <button
                                    onClick={() => handleDeleteContact(contact.id)}
                                    className="ml-5 text-red-600 hover:text-red-800 transition duration-200"
                                >
                                    Delete
                                </button>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center mt-6">No emergency contacts added yet.</p>
                    )}
                </ul>
            </div>

            {/* SOS Button */}
            <div className="text-center mt-10">
                <button
                    onClick={handleSOS}
                    className="bg-red-600 text-white py-3 px-8 rounded-lg hover:bg-red-700 transition duration-200"
                >
                    SOS
                </button>
            </div>
        </div>
    );
};

export default EmergencyContact;
