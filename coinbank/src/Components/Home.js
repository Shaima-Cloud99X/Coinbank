import React from 'react';
import '../Styles/Home.css';
import logo from '../Assets/Logo.png';
import vector from '../Assets/Vector.png';
import content from '../Assets/Content.png';
import '../Styles/font.css';
import heroImg1 from '../Assets/heroImg1.png';
import heroImg2 from '../Assets/heroimg2.png';
import HeroImage from '../Assets/Illustration.png';
import Pattern from '../Assets/Pattern.png';
import featureImg from '../Assets/featureImg.png'

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

             <div className='heroContent'>

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
            <div className='imageContainer'>
            <img src = {HeroImage} alt = 'Hero image' width={494} height={430} style={{}}/>

            </div>
       
            
            </div>

            <div className='content'>
                <img src = {content} alt = 'content' />
            </div>

            <div style = {{marginTop:140}}>

            <div className='gradient-background1'>

            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;

                
                <div  >
                <p style={{color:'#523FE8',fontWeight:'bold', fontSize:13, textAlign:'center',marginTop:-390 }}>FEATURES</p>
                {/* <img src = {Pattern} alt = 'content' style={{position:'absolute'}}/> */}
                <div className='featureBackground'>
                <h1 style={{fontSize:50, color:'#0E0637',marginTop:-2, textAlign:'center'}}>Get a bird's eye view of your<br/>crypto investments</h1>
                <p style = {{color: '#717184', maxWidth:'1090px', lineHeight:'28px', display:'block', fontSize:18, marginTop:-20, textAlign:'center', marginLeft:220}}>Keep up on all the latest trends in the crypto and stay
                 <br/>ahead of the market.</p>

                 <img src = {featureImg} alt = 'dashboard' width={1120} height={580} style={{position:'absolute', alignSelf:'center', marginLeft:185}}/>
                </div>
                </div>

               

            </div>

            </div>


            
        </div>
        
    )

}

export default Home;