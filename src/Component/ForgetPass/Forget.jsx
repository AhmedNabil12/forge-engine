import "./Forget.css";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';
function Forget() {

    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.console.log(email);
    }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Forgot Password</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1 text-danger"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>New Password</label>
                        <input
                            type="password"
                            className="form-control mt-1 text-danger"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="button bg-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Forget;
