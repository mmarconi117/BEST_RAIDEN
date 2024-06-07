import React, { useState } from "react";
import axios from "axios";
import './Form.css'; // Import the CSS file

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/send-email", {
                name,
                email,
                message
            });

            console.log("Email sent successfully:", response.data);
            setSuccessMessage("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="name" className="formLabel">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="formInput"
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" className="formLabel">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="formInput"
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" className="formLabel">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="5"
                        className="formTextarea formInput"
                    ></textarea>
                </div>
                <button type="submit" className="formButton">
                    Submit
                </button>
            </form>
            {successMessage && <p className="successMessage">Success: {successMessage}</p>}
        </div>
    );
}
