/* import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const getUsers = () => axios.get(API_URL);
export const createUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);

import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from './api';

const App = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: '', email: '' });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await updateUser(editingId, form);
        } else {
            await createUser(form);
        }
        setForm({ name: '', email: '' });
        setEditingId(null);
        fetchUsers();
    };

    const handleEdit = (user) => {
        setForm(user);
        setEditingId(user.id);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        fetchUsers();
    };

    return (
        <div>
            <h1>CRUD */



