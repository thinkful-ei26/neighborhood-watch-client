import React from 'react';
import {connect} from 'react-redux';
import { focusOn} from '../../actions/navigation';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from './local-storage';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css'

export class Navbar extends React.Component{
  onClick(focus=""){
    this.props.dispatch(focusOn(focus));
  }

  navbarLinks(){

    if(!this.props.loggedIn){
      return (
        <div className = "right">
          <Link 
            className="link"
            onClick={()=>this.onClick('login-username')} 
            to ="/#login">
            Login
          </Link>
          <Link 
            className="link"
            onClick={()=>this.onClick('registerUsername')} 
            to ="/#register">
            Register
          </Link>
        </div>
      )
    }
  }

  render(){  
    return( 
      <nav className="main-navbar">
        <Link className="logo" to="/home">
          DownTheBlock
        </Link>
        {this.navbarLinks()}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);