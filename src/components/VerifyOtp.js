import React, { useEffect, useState } from "react";
import "../css/Authentication.css";
import { useLocation } from "react-router-dom";
import BackAction from "../Utils/BackAction";

const VerifyOtp = (props) => {
    // let params =  new URLSearchParams(props.location.search);
    const location = useLocation();
    const parseQueryParams = (search) => {
        const params = new URLSearchParams(search);
        const queryParams = {};
        for (let param of params.entries()) {
            queryParams[param[0]] = param[1];
        }
        return queryParams;
    };
    const queryParams = parseQueryParams(location.search);
    const [formData, setFormData] = useState({
        email: queryParams.email,
        otp: ""
    });
    const [incorrectOtp, setIncorrectOtp] = useState(false);
    const [isVerify, setIsVerify] = useState(false)
    const { email, otp } = formData;
    console.log({params: formData})
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
        BackAction.verify(formData)
        .then(res => {
            if(res) {
                setIsVerify('success');
                setIncorrectOtp(false);
            }
            else setIncorrectOtp(true);
        })
    };

    useEffect(() => {
        // You can add any side-effects here that depend on the 'formData'.
    }, [formData]);
    return (
        <div className="container">
            {isVerify ? (
                <div>
                    <h3>Your account has been activated successfully.</h3>
                    <a href="/signin">Sign In</a>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Please verify your Email</h2>
                    <div className="input-group">
                        <label>verify your OTP :</label>
                        <input
                            type="password"
                            name="otp"
                            value={otp}
                            onChange={handleChange}
                            required
                        />
                        {incorrectOtp && <span className="invalid-message">Incorrect Otp</span>}
                    </div>
                    <div className="input-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default VerifyOtp;
