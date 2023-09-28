import React, { useEffect, useState } from "react";
import "../css/Authentication.css";
import BackAction from "../Utils/BackAction";
import { useNavigate } from "react-router-dom";

const SignUpPortal = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        // file: null,
    });
    const navigate = useNavigate();
    const { name, email, password, confirmPassword, age, file } = formData;

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // api call
        BackAction.register(formData)
        .then(res => {
            navigate(`/verify?email=${email}`);
        })
        // verify
        
    };

    useEffect(() => {
        // You can add any side-effects here that depend on the 'formData'.
    }, [formData]);

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Register Yourself</h2>
                <div className="input-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        // required
                    />
                </div>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        // required
                    />
                </div>
                <div className="input-group">
                    <label>Create Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        // required
                    />
                </div>
                <div className="input-group" >
                    <label>Confirm Password:</label>
                    <input
                        disabled={formData.password.length === 0}
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        // required
                    />
                    { 
                        formData.confirmPassword.length > 0 && 
                        formData.password != formData.confirmPassword && 
                        <span className="invalid-message" >password did not match</span>
                    }
                </div>
                <div className="input-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={handleChange}
                        // required
                    />
                </div>
                {/* <div className="input-group">
                    <label>Upload Your ID Card:</label>
                    <input
                        type="file"
                        name="file"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={handleChange}
                    />
                </div> */}
                <div className="input-group">
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpPortal;
