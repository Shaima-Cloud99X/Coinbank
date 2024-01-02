import React from 'react';
import '../Styles/Home.css';
import logo from '../Assets/Logo.png'

const Home = () => {
    return(
        <div>
            <div className='navbarStyle'>
                <img src = {logo} alt = 'Logo' />
            </div>
            <div className="header">
            <div className="header-item">
                <p>Features</p>
            </div>
            <div className="header-item">
                <p>Prices</p>
            </div>
            <div className="header-item">
                <p>Company</p>
            </div>
            <div className="header-item">
                <p>Developing</p>
            </div>
           
            </div>
            <div className="buttons">
            <button className="header-button">Sign In</button>
            <button className="header-button">Get Started</button>
        </div>


            <div className='headline'>
                <p style={{color:'#523FE8'}}>SIGN IN TO YOUR SECURE WALLET</p>
            </div>
            
        </div>
        
    )

}

export default Home;