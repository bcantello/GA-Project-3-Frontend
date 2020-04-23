import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AppContext} from '../../App';
import './Confirmation.css';
import Calendar from '../../assets/conf-cal.png';


function Confirmation() {
    const appProp = useContext(AppContext)
    
    return(
        <body className="conf-body">
        <div className="conf-page">
            <div className="conf-box">
                <div className="conf-box-info">
                <h1 className="conf-h1">Request Sent!</h1>
                <p className="conf-par">Average wait time for confirmation is:</p>
                <h2 className="conf-h2">20 min.</h2>
                <p className="conf-par">We will text you when we confirm your provider.</p>
                <div className="conf-info">
                    <img className="conf-cal" src={Calendar} alt='Request Details'/>
                    <p className="requested-service">Requested date and time for a {appProp.service}</p>
                    <p className="date-time" value={appProp.date}> at 10:30 AM</p>
                </div>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                <h3 className="conf-h3">Back to Home Page</h3>
                </Link>
                </div>
            </div>
        </div>
        </body>
    )
}

export default Confirmation;