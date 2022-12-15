import "./Learn.css";

import sky from "./sky.jpg";
import img1 from "./img1.jpg"
import l1 from "./l1.webp";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import whatsapp from "./whatsapp.png";


function Learn() {

    return (
        <div className="myheaderLearn">

            <h1 className="titleLearn" id="sloganLearn">
                Let's Build <br />
                Your Own <br />
                GAME ENGINE</h1>
            <div>
                <img src={sky} id="image1Learn"></img>
            </div>

            <div className="BigcardLearn">
                <h3 className="txt">Forge Engine is newest game engine, which is growing<br />
                    rapidly. Start learning the skills you need to build a one <br />
                    right on the way.
                </h3>
                <br />
                <h2 className="">
                    Choose your Desired Field
                </h2>
                <br />

                <div>
                    <div class="containerLearn">
                        <div class="card">
                            <h3 id="title">Games</h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                                <div >
                                    <img src={l1} id="image2Learn"/>
                                    <p><a href="https://dev.epicgames.com/community/learning?industry=games&application=unreal_engine">
                                    Epic Games</a></p>
                            </div>
                            </div>
                           
                        </div>

                        <div class="card">
                            <h3 id="title">Visualization</h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                                <div >
                                <img src={p2} id="image2Learn"/>
                                <p><a href="https://dev.epicgames.com/community/learning?industry=games&application=unreal_engine">
                                    Epic Games</a></p>
                            </div>
                            </div>
                            
                        </div>

                        <div class="card">
                            <h3 id="title">Film Making</h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                                <div >
                            <img src={p4} id="image2Learn"/>
                                    <p><a href="https://dev.epicgames.com/community/learning?industry=games&application=unreal_engine">
                                    Epic Games</a></p>
                            </div>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div >

            <div id="footerabout">
                <footer class="footer-distributed">

                    <div class="footer-right">

                        <a href="https://www.instagram.com/"><img src={instagram} id="inst"></img></a>
                        <a href="https://www.facebook.com/"><img src={facebook} id="face"></img></a>
                        <a href="https://www.whatsapp.com/"><img src={whatsapp} id="whats"></img></a>
                    </div>

                    <div class="footer-left">

                        <p class="footer-links">
                            <a class="link-1" href="/home">Home</a>

                            <a href="/AboutUs">About Us</a>

                            <a href="#">Documentation</a>

                        </p>

                        <p>Forge Engine &copy; 2022</p>
                    </div>

                </footer>
            </div>

        </div >


    );
};
export default Learn;