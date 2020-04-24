import React, {useState, useContext} from 'react'
import {verifyUser} from '../../services/api-helper'
import {AppContext} from '../../App.js'
import {Link} from "react-router-dom";
import './SignUp-Login.css'

function Login(props) {
    const appProps = useContext(AppContext)

    const [User, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const value = e.target.value
        setUser({...User, [e.target.name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const json = await verifyUser(User).then(response => {
            if (response.status === 200) {
                handleSuccessfulAuth(response.data)
            } else {
                console.log('login error')
            }
        }).catch(error => {
            console.log("registration error", error)
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
                <div className="Login">

                    <div className="User-Login">user login</div>
                    <form className="Login-Form" onSubmit={handleSubmit}>
                        <input className="Login-Form-Input"
                               type="email"
                               name="email"
                               placeholder="EMAIL"
                               value={User.email}
                               onChange={handleChange} required/>
                        <input className="Login-Form-Input"
                               type="password"
                               name="password"
                               placeholder="PASSWORD"
                               value={User.password}
                               onChange={handleChange} required/>
                        <button className="Login-Form-Button" type="submit">continue</button>
                    </form>
                    <p className="login-prompt">Don't have an account? <Link to="/signup">Create one!</Link></p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;