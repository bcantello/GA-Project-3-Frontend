import React, {useState, useContext} from 'react'
import {createUser} from '../../services/api-helper'
import {AppContext} from '../../App.js'
import {Link} from "react-router-dom";
import './SignUp-Login.css'

function SignUp(props) {
    const appProps = useContext(AppContext)
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        zip: ""
    });

    const handleChange = (e) => {
        const value = e.target.value
        setNewUser({...newUser, [e.target.name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const json = await createUser(newUser).then(response => {
            if (response.status === 200) {
                handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.log("registration error", error);
        });
    };

    const handleSuccessfulAuth = (data) => {
        appProps.handleLogin(data);
        props.history.push("/dashboard");
    };

    return (
        <>
        <div className="auth-body">
            <img className="Login-Image" src="https://res.cloudinary.com/de2i4dwok/image/upload/v1587589538/Project3/logo-white_qn3hrm.png" alt="Fetch logo" />
            <div className="Login-Container">
                <div className="SignUp">
                    <div className="Create-Account">create account</div>
                    <form onSubmit={handleSubmit} className="SignUp-Form">
                        <input className="SignUp-Form-Input"
                            type="text"
                            name="name"
                            placeholder="NAME"
                            value={newUser.name}
                            onChange={handleChange} required/>
                        <input className="SignUp-Form-Input"
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                            value={newUser.email}
                            onChange={handleChange} required/>
                        <input className="SignUp-Form-Input"
                            type="password"
                            name="password"
                            placeholder="PASSWORD"
                            value={newUser.password}
                            onChange={handleChange} required/>
                        <input className="SignUp-Form-Input"
                            type="number"
                            name="zip"
                            placeholder="ZIP CODE"
                            value={newUser.zip}
                            onChange={handleChange} required/>
                        <button className="SignUp-Form-Button" type="submit">register</button>
                    </form>
                    <p className="login-prompt">Already have an account? <Link to="/login">Log in!</Link></p>
                </div>
            </div>
        </div>
        </>
    );
}

export default SignUp;
