// wa_ss24_primeflex/frontend/src/components/pages/AdminPage.js
import React, { useState, useEffect } from 'react';
import '../styles/AdminPage.css'
import { Link } from 'react-router-dom';

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ username: '', email: '', password: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/user');
            if (response.ok) {
                const userData = await response.json();
                setUsers(userData);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            const response = await fetch(`/api/user/${userId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const changeUserRole = async (userId, newRole) => {
        try {
            const response = await fetch(`/api/user/${userId}/role`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ role: newRole })
            });
            if (response.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error('Error changing user role:', error);
        }
    };

    const handleNewUserChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const addUser = async () => {
        try {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            if (response.ok) {
                fetchUsers();
                setNewUser({ username: '', email: '', password: '' });
            }
        } catch (error) {
            console.error('Error adding new user:', error);
        }
    };

    return (
        <div className="admin-page">
            <h1>Admin Panel</h1>
            <div className="user-list">
                <h2>Registered Users:</h2>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <span>{user.username} ({user.email})</span>
                            {user.role === 'user' && (
                                <div>
                                    <button onClick={() => deleteUser(user._id)}>Delete</button>
                                    <button onClick={() => changeUserRole(user._id, 'admin')}>Make Admin</button>
                                </div>
                            )}
                            {user.role === 'admin' && (
                                <button onClick={() => changeUserRole(user._id, 'user')}>Revoke Admin</button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="new-user-form">
                <h2>Add New User:</h2>
                <input type="text" name="username" placeholder="Username" value={newUser.username} onChange={handleNewUserChange} />
                <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleNewUserChange} />
                <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleNewUserChange} />
                <button onClick={addUser}>Add User</button>
            </div>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default AdminPage;