import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPortal from './components/SignUpPortal';
import SignInPortal from './components/SignInPortal';
import Home from './components/Home';
import VerifyOtp from './components/VerifyOtp';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/signup" element={<SignUpPortal />} />
                <Route path="/signin" element={<SignInPortal/>} />
                <Route path="/verify" element={<VerifyOtp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
