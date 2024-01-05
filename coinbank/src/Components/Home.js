import React from 'react';
import '../Styles/Home.css';
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
import features4 from '../Assets/features4.png'

const Home = () => {
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
                <h1 style={{fontSize:40, color:'#0E0637',marginTop:-2, textAlign:'center'}}>Get a bird's eye view of your<br/>crypto investments</h1>
                <p style = {{color: '#717184', maxWidth:'1090px', lineHeight:'28px', display:'block', fontSize:18, marginTop:-20, textAlign:'center', marginLeft:220}}>Keep up on all the latest trends in the crypto and stay
                 <br/>ahead of the market.</p>

                 <img src = {featureImg} alt = 'dashboard' width={1110} height={580} style={{position:'absolute', alignSelf:'center', marginLeft:185, }}/>
                </div>
                </div>   

            </div>

            </div>


            <div className='gradient-background2'>
            <div className='featureBackground2'>

            <div style = {{marginTop:70, alignItems:'center', marginRight:380}}  >
            
                <p style={{color:'#523FE8',fontWeight:'bold', fontSize:13, textAlign:'center', }}>FEATURES</p>
               
                <h1 style={{fontSize:40, color:'#0E0637',marginTop:30, textAlign:'center'}}>Many type of Blockchains</h1>
                <p style = {{color: '#717184', maxWidth:'1090px', lineHeight:'28px', display:'block', fontSize:18, marginTop:20, textAlign:'center',}}>Amet minim mollit
                 non deserunt ullamco est sit aliqua dolor do amet sint.<br/> Velit officia consequat duis enim velit mollit. Exercitation veniam consequat<br/>sunt nostrud amet.</p>

               
                </div>

                <img src = {bitcoins} alt = 'dashboard' width={1120} height={164} style={{position:'absolute',marginLeft:-210, marginTop:80}}/>
                </div>


            </div>

            
            <div className='gradient-background3'>
              <p className="features-text">FEATURES</p>

            <h1 style={{fontSize:20, color:'#0E0637',marginTop:-750, textAlign:'center' ,marginLeft:-140,}}>Supertrade your changes<br/>
             with advanced features</h1>
            
             <img className="card" src = {card} alt = 'content' />
             <img className="line"src = {lines} alt = 'content' />
           
           

            </div>

            <div className='gradient-background4'>
            <div className='container4'>
            <p style={{color:'#523FE8',fontWeight:'bold', fontSize:13, textAlign:'left', }}>FEATURES</p>
            <h1 style={{fontSize:40, color:'#0E0637' ,textAlign:'left'}}>Seamless Trading</h1>
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



            
        </div>
        
    )

}

export default Home;