// App.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../../redux/userSlice';
import UnsavedChangesPopup from './UnsavedChangesPopup';
import Login from '../GoogleLogin';

function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [showUnsavedChangesPopup, setShowUnsavedChangesPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = generateUserId();
    dispatch(saveUserData({ ...formData, userId }));
    localStorage.setItem('userData', JSON.stringify({ ...formData, userId }));
    setFormData({
      name: '',
      address: '',
      email: '',
      phone: '',
    });
  };

  const handleWindowClose = (e) => {
    if (formData.name !== '' || formData.address !== '' || formData.email !== '' || formData.phone !== '') {
      setShowUnsavedChangesPopup(true);
      e.preventDefault();
      e.returnValue = '';
    }
  };

  const generateUserId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleLeave = () => {
    // Implement leave functionality here
    setShowUnsavedChangesPopup(false);
    window.close(); // This will close the window/tab
  };

  const handleStay = () => {
    // Implement stay functionality here
    setShowUnsavedChangesPopup(false);
  };

  window.addEventListener('beforeunload', handleWindowClose);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow">
        <h1 className="text-2xl mb-4">User Data Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
            <Login />
          </div>
        </form>
      </div>
      {showUnsavedChangesPopup && <UnsavedChangesPopup onLeave={handleLeave} onStay={handleStay} />}
    </div>
  );
}

export default Form;
