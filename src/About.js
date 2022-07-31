import React from 'react';
import './about.css';
import './App.css';
function About (){
        return(
            <>
            <div className="title">About Us</div><br />
                <div className='container-about'>
                    <div className='para1'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src='./about1.jpg'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src='./about4.jpg'></img>
                            <p>
                                <h3>1. How we started?</h3> AudioPhile was established in 2000, we started with a small store in Mumbai.<br />
                                Today we are a family of <strong>20M subscribers!!!</strong><br />
                                AudioPhile was an idea came from a need, our founder Ms. XYZ was a music lover<br />
                                she always wanted to have her own recording studio, and that's when AudioPhile was born.
                            </p>
                    </div>
                    <div className='para2'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='./about2.jpg'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='./about5.jpg'></img>
                        <p>
                            <h3>2. What are we?</h3> AudioPhile is a startup company. We are currently focusing on expanding our global reach.<br />
                                We Indians love using foreign platforms. <br /> We are dedicated to develop a platform that not only will be used by us,
                                but by others also.
                        </p>
                    </div>
                    <div className='para3'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='./about3.jpg'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src='./about6.jpg'></img>
                        <p>
                            <h3>3. What are we aiming at?</h3> AudioPhile is aiming at gaining 50M subscribers at the end of this year.<br />
                                We are expecting more Indians to join us in this race.<br /> We also encourage more self-made artists to use our feature of booking 
                                a recording studio, <br /> record a song and keep your dreams alive.
                        </p>
                    </div>
                </div><br /> <br />
                <div className="title">Our yearly activities...</div><br />
                <div class="row mb-5"> 
                    <div class="column">
                        <img src="./concert1.jpg" style={{width:'100%'}}></img>
                        <img src="./concert5.jpg" style={{width:'100%'}}></img>
                        <img src="./concert11.jpg" style={{width:'100%'}}></img>
                    </div>
                    <div class="column">
                        <img src="./concert3.jpg" style={{width:'100%'}}></img>
                        <img src="./concert4.jpg" style={{width:'100%'}}></img>
                        <img src="./concert10.jpg" style={{width:'100%'}}></img>
                    </div>  
                    <div class="column">
                        <img src="./concert6.jpg" style={{width:'100%'}}></img>
                        <img src="./concert2.jpg" style={{width:'100%'}}></img>
                        <img src="./concert9.jpg" style={{width:'100%'}}></img>
                    </div>
                    <div class="column">
                        <img src="./concert7.jpg" style={{width:'100%'}}></img>
                        <img src="./concert8.jpg" style={{width:'100%'}}></img>
                        <img src="./concert12.jpg" style={{width:'100%'}}></img>
                    </div>
                    </div>
            </>
        );    
}
export default About;