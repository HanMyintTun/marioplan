import React from 'react'
import { Link } from 'react-router-dom'
import SingedInLinks from './SignedInLinks'
import SingedOutLinks from './SignedOutLinkes'
import { connect } from 'react-redux'
const Navbar = (props) =>{
    const { auth } = props;
    //console.log(auth)
    const links = auth.uid ? <SingedInLinks/> : <SingedOutLinks/>
    return(
        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                {links}
                
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)