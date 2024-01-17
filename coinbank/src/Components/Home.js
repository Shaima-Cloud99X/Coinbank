import React from 'react';
import '../Styles/Home.css';
import { useState } from 'react';
import logo from '../Assets/Logo.png';
import vector from '../Assets/Vector.png';
import content from '../Assets/Content.png';
import companies from '../Assets/Companies.png';
import '../Styles/font.css';
import heroImg1 from '../Assets/heroImg1.png';
import heroImg2 from '../Assets/heroimg2.png';
import HeroImage from '../Assets/Illustration.png';
import Pattern from '../Assets/Pattern.png';
import featureImg from '../Assets/featureImg.png'
import bitcoins from '../Assets/Illustration2.png'
import lines from '../Assets/Lines.png'
import card from '../Assets/Card.png'
import testimonial from '../Assets/Testimonials.png'
import frame from '../Assets/Frame.png'
import CTA from '../Assets/CTA.png'
import footerLogo from '../Assets/footerLogo.png';
import features4 from '../Assets/features4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram,faLinkedin,faDiscord } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

   
  const [dropdownValue, setDropdownValue] = useState('');



  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };



    return(
        <div className='main-container'>
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
               
                <h1 style={{fontSize:64, color:'#0E0637', marginTop:20, fontFamily:'Aeonik-Medium'}}>The next-gen <br/>crypto wallet & <br/>trading platform</h1>
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

            
            <div>
                <p className="partners-text">PARTNERS</p>
                <h1 style={{fontSize:20, color:'#0E0637', fontWeight:'bold', marginTop:20 , marginLeft: 570}}>We're backed by the best</h1><br/>
                <p style = {{color: '#717184',  display:'block', fontSize:13, marginTop:-20, marginLeft: 560}}>Trusted by these blockchain leading industries</p>
                <img className='companies' src = {companies} alt = 'companies' />
            </div>

            <div className='content'>
                <img src = {content} alt = 'content' />
            </div>


            <div style = {{marginTop:100}}>

            <div className='gradient-background1'>
     
                <div  >
                <p style={{color:'#523FE8',fontWeight:'bold', fontSize:13, textAlign:'center',marginTop:-450 }}>FEATURES</p>
                {/* <img src = {Pattern} alt = 'content' style={{position:'absolute'}}/> */}
                <div className='featureBackground'>
                {/* <p style={{color:'#523FE8',fontWeight:'bold', fontSize:13, textAlign:'center',  marginLeft:-40}}>FEATURES</p> */}
                <h2 style={{fontSize:40, color:'#0E0637',marginTop:30, textAlign:'center', fontFamily:"Aeonik-Medium", marginLeft:-20}}>Get a bird's eye view of your<br/>crypto investments</h2>
                <p style = {{color: '#717184', maxWidth:'1090px', lineHeight:'28px', display:'block', fontSize:18, marginTop:-10, textAlign:'center', marginLeft:200}}>Keep up on all the latest trends in the crypto and stay
                 <br/>ahead of the market.</p>
                 <img src = {featureImg} alt = 'dashboard' width={1110} height={580} style={{position:'absolute', alignSelf:'center', marginLeft:165,marginTop:30 }}/>
                </div>
                </div>   

            </div>

            </div>


            <div className='gradient-background2'>
            <div className='featureBackground2'>

            <div style = {{marginTop:70, alignItems:'center', marginRight:380}}  >
            
                <p style={{color:'#523FE8',fontWeight:'bold', fontSize:13, textAlign:'center', }}>FEATURES</p>
               
                <h2 style={{fontSize:40, color:'#0E0637',marginTop:30, textAlign:'center', fontFamily:"Aeonik-Medium"}}>Many type of Blockchains</h2>
                <p style = {{color: '#717184', maxWidth:'1090px', lineHeight:'28px', display:'block', fontSize:18, marginTop:20, textAlign:'center',}}>Amet minim mollit
                 non deserunt ullamco est sit aliqua dolor do amet sint.<br/> Velit officia consequat duis enim velit mollit. Exercitation veniam consequat<br/>sunt nostrud amet.</p>

               
                </div>

                <img src = {bitcoins} alt = 'bitcoins' width={1120} height={164} style={{position:'absolute',marginLeft:-210, marginTop:100,}}/>
                </div>


            </div>

            
            <div className='gradient-background3'>
            <div style = {{marginRight:700, marginTop:800}}>
                <p className="features-text">FEATURES</p>
                <h2 style={{fontSize:40, color:'#0E0637',marginTop:40, textAlign:'center', fontFamily:'Aeonik-Medium'}}>Supertrade your changes<br/>
 with advanced features</h2>

                </div>
            
             <img className="card" src = {card} alt = 'content' />
             <img className="line"src = {lines} alt = 'content' />
           
           

            </div>

            <div className='gradient-background4'>
            <div className='container4'>
            <p style={{color:'#523FE8',fontWeight:'bold', fontSize:13, textAlign:'left', }}>FEATURES</p>
            <h2 style={{fontSize:40, color:'#0E0637' ,textAlign:'left', fontFamily:'Aeonik-Medium'}}>Seamless Trading</h2>
            <div className='text-container'>
            <div>
            <p style = {{color: '#717184', maxWidth:'1090px', lineHeight:'28px', display:'block', textAlign:'left'}}>Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint. Velit officia <br/> 
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
            Amet <br/> minim mollit non deserunt ullamco est sit aliqua dolor.</p>
            </div>
            <div>
            <p style = {{color: '#717184', maxWidth:'1090px', lineHeight:'28px', display:'block', textAlign:'left', marginLeft:70}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br/> do amet sint. Velit officia 
                consequat duis enim velit <br/> mollit. Exercitation veniam consequat sunt nostrud amet. </p>
            </div>
            </div>
            <img src = {features4} alt = 'fourth feature' width={1170} height={610} style={{position:'absolute', alignSelf:'center', marginLeft:-55}}/>
           

            </div>

            </div>

            <div className='container5'>
            
            <div className='gradient-backgound-last'>

            <p style={{color:'#523FE8',fontWeight:'bold', fontSize:13, textAlign:'center', marginTop:100,}}>TESTIMONIALS</p>
            <h2 style={{fontSize:40, color:'#0E0637' ,textAlign:'center', fontFamily:'Aeonik-Medium'}}>Trusted by more than 100K + people </h2>
            <p style={{fontSize:13, color:'#717184' ,textAlign:'center', fontFamily:'Aeonik-Medium'}}>Hear what they say about us and why you choose coinbank</p>

            <img className="test" src = {testimonial} alt = 'content' width={1120} height={334} style ={{ alignSelf:'center', marginLeft:130}} />
            <img className="frame" src = {frame} alt = 'content' width={1440} height={160} style ={{ alignSelf:'center', marginLeft:-20, marginTop:50}} />
            <img className="CTA" src = {CTA} alt = 'content' width={1120} height={400} style ={{ alignSelf:'center', marginLeft:140, marginTop:50}} />
             
        <div className='contain'>
            <div className='footer'>
                <div className='column-one'>
                    <img src = {footerLogo} alt = 'Logo' />
                    <br/>
                    <br/>
                

        <select value={dropdownValue} onChange={handleDropdownChange} className='language'>
          <option value="option1">English</option>
          <option value="option2">Sinhala</option>
        </select>
        <br/>
        <br/>

    <div className="social-icons-container">
    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      <FontAwesomeIcon icon={faFacebook} className="social-icon" />
      <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
      <FontAwesomeIcon icon={faDiscord} className="social-icon" />
    </div>
    <br/>
    <br/>
  
    <p className='copyright-text'>Copyright 2022 &copy; Coinbank</p>

                </div>


                <div className='links-container'>
                    <div className='second-column'>
                    <p style={{marginLeft:40}}>Company</p>
                    <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/about">Careers</a></li>
                    <li><a href="/contact">Affiliates</a></li>
                    <li><a href="/contact">Press</a></li>
                    <li><a href="/contact">Inventors</a></li>
                    <li><a href="/contact">Legal & Privacy</a></li>
                    </ul>
                    </div>

                    <div className='second-column'>
                    <p style={{marginLeft:40}}>Features</p>
                    <ul>
                    <li><a href="/">Buy & sell Crypto</a></li>
                    <li><a href="/about">Wallet</a></li>
                    <li><a href="/contact">Card</a></li>
                    <li><a href="/contact">Dashboard</a></li>
                    <li><a href="/contact">Trading</a></li>
                    <li><a href="/contact">Portfolio</a></li>
                    </ul>
                    </div>

                    <div className='second-column'>
                    <p style={{marginLeft:40}}>Developers</p>
                    <ul>
                    <li><a href="/">Cloud</a></li>
                    <li><a href="/about">Wallet SDK</a></li>
                    <li><a href="/contact">Query & Transact</a></li>
                    <li><a href="/contact">Commerce</a></li>
                    <li><a href="/contact">Exchange & Pro</a></li>
                    <li><a href="/contact">API Access</a></li>
                    </ul>
                    </div>

                    <div className='second-column'>
                    <p style={{marginLeft:40}}>Resources</p>
                    <ul>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/about">Help & Support</a></li>
                    <li><a href="/contact">Customer Stories</a></li>
                    <li><a href="/contact">FAQ</a></li>
                    </ul>
                    </div>
                </div>
            </div>

            </div>

            </div>


            </div>



            {/* <div className='footer-container'>

           
</div> */}


            


            
        </div>
        
    )

}

export default Home;