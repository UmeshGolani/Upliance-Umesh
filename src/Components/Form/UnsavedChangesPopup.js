// UnsavedChangesPopup.js

import React from 'react';

const UnsavedChangesPopup = ({ onLeave, onStay }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        <p className="mb-2 text-lg">You have unsaved changes. Are you sure you want to leave?</p>
        <div className="flex justify-end">
          <button onClick={onLeave} className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Leave</button>
          <button onClick={onStay} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Stay</button>
        </div>
      </div>
    </div>
  );
};

export default UnsavedChangesPopup;
