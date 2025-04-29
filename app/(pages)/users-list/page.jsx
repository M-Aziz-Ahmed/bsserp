'use client'
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/contact/list/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setContacts(data.results || []);
            } catch (error) {
                console.error('Error fetching contacts:', error);
                setError('Failed to load contacts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    if (loading) return (
        <div className="d-flex justify-content-center my-5">
            <div className="spinner-border text" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    if (error) return <div className="alert alert-danger">{error}</div>;

    if (!loading && contacts.length === 0) {
        return <div className="alert alert-info">No contact requests found</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Contact Requests</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Service</th>
                            <th>Message</th>
                            <th>Date Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td>{contact.user_name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone_number || '-'}</td>
                                <td>{contact.services}</td>
                                <td className="text-truncate" style={{maxWidth: '200px'}}>
                                    {contact.message}
                                </td>
                                <td>
                                    {new Date(contact.created_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;