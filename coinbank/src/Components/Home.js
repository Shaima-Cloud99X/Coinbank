import React from 'react';
import '../Styles/Home.css';
import logo from '../Assets/Logo.png';
import vector from '../Assets/Vector.png';
import '../Styles/font.css';

const Home = () => {
    return(
        <div>
            <div className='navbarStyle'>
                <img src = {logo} alt = 'Logo' />
            </div>
            <div className="header">
            <div className="header-item">
                <p>Features    <img src = {vector} alt = 'vector' /></p>
            </div>
            <div className="header-item">
                <p>Prices</p>
            </div>
            <div className="header-item">
                <p>Company  <img src = {vector} alt = 'vector' /></p>
            </div>
            <div className="header-item">
                <p>Developing</p>
            </div>
           
            </div>
            <div className="buttons">
            <button className="header-button">Sign In</button>
            <button className="header-button1">Get Started</button>
        </div>


            <div className='gradient-background'>
            <div className='headline'>
                <p style={{color:'#523FE8',fontWeight:'bold', fontSize:13 }}>SIGN IN TO YOUR SECURE WALLET !</p>
               
                <h1 style={{fontSize:50, color:'#0E0637', fontWeight:'bold', marginTop:20}}>The next-gen <br/>crypto wallet & <br/>trading platform</h1>
                <p style = {{color: '#717184', maxWidth:'1090px', lineHeight:'28px', display:'block', fontSize:15, marginTop:-20}}>All of your cryptocurrency in one place — from <br/>Bitcoin and Ethereum to Litecoin and Ripple.</p>
                <div style={{display:"flex"}}>
                <input
                    type="text"
                    id="textInput"
                    placeholder="Your email address"
                    style={{width:'260px', height:'40px', borderColor:'#ffffff', borderWidth:0, borderRadius:'5px', padding:"5px", paddingLeft:"15px",color:'#9C9CAB'}}
                />
                <button className='getStarted' style={{padding:'9px',backgroundColor:'#5235E8' ,borderRadius:'5px',justifyContent: 'center', width:'120px',borderWidth:0, marginLeft:20}}>Get Started</button>
                </div>

            </div>
       
            
            </div>
            
        </div>
        
    )

}

export default Home;