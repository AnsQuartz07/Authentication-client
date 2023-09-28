import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/Authentication.css";

const Home = () => {
    const navigate = useNavigate();

    
    return (
        <div className="container">
            <button onClick={() => navigate('/signup')}>
                Sign Up
            </button>
            <button onClick={() => navigate('/signin')}>
                Sign In
            </button>
        </div>
    );
};

export default Home;
