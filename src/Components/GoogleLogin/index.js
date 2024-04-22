// Login.js

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const responseGoogle = async (response) => {
    console.log(response); // Log user information
    // Extract user details from the response
    response = await jwtDecode(response.credential);
    console.log(response); //
    const userDetails = {
      name: response.given_name + " " + response.family_name,
      email: response.email,
      address: '', // You may need to fetch the address separately using Google APIs
      phone: '', // You may need to fetch the phone number separately using Google APIs
    };
    // Store user details in local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    // Handle Google sign-in response
    alert(`${userDetails.name} Welcome`);
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        buttonText="Sign in with Google"
        className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Login;
