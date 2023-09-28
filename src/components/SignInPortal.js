import React, { useEffect, useState } from "react";
import "../css/Authentication.css";

const SignInPortal = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        
    };

    useEffect(() => {
        // You can add any side-effects here that depend on the 'formData'.
    }, [formData]);

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Log in to your account</h2>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    );
};

export default SignInPortal;
