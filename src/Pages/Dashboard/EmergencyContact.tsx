import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Contact {
    id?: string;
    name: string;
    contactNumber: string;
    email: string;
}

const EmergencyContact: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [formData, setFormData] = useState<Contact>({
        name: '',
        contactNumber: '',
        email: '',
    });
    const [message, setMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/emergency-contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddContact = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (contacts.length >= 5) {
            alert('Maximum of 5 contacts allowed!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/emergency-contacts', formData);
            setContacts([...contacts, response.data]);
            setFormData({ name: '', contactNumber: '', email: '' });
            setMessage('Contact added successfully!');
            setMessageType('success');

            // Hide the message after 2 seconds
            setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 2000);
        } catch (error) {
            console.error('Error adding contact:', error);
            setMessage('Failed to add contact. Please try again.');
            setMessageType('error');

            // Hide the message after 2 seconds
            setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 2000);
        }
    };

    const handleDeleteContact = async (id?: string) => {
        if (!id) return;

        try {
            await axios.delete(`http://localhost:8080/api/emergency-contacts/${id}`);
            setContacts(contacts.filter(contact => contact.id !== id));
            setMessage('Contact deleted successfully!');
            setMessageType('success');

            // Hide the message after 2 seconds
            setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 2000);
        } catch (error) {
            console.error('Error deleting contact:', error);
            setMessage('Failed to delete contact. Please try again.');
            setMessageType('error');

            // Hide the message after 2 seconds
            setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 2000);
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
                    {contacts.map(contact => (
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
                    ))}
                </ul>

                {contacts.length === 0 && (
                    <p className="text-gray-500 text-center mt-6">No emergency contacts added yet.</p>
                )}
            </div>
        </div>
    );
};

export default EmergencyContact;
