import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import SignupForm from './SignupForm';
import Navbar from '../common/Navbar'

export function RegistrationPage(props) {
    
    if (props.loggedIn) {
        return <Redirect to="/home" />;
    }

    return (
        <div className="registration-page">
            <Navbar/>
            <h2 className="registration-page-h2">Sign up Below</h2>
            <SignupForm/><br/>
            <label className="registration-page-label">Already Registered?</label>
            <Link to="/" style={{color: 'blue'}}>login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);