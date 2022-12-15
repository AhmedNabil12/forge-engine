import "../../App.css";
import "./AboutUs.css";
import image1 from "./img1.png";
import sea from "./sea.jpg";
import multiplayer from "./multiplayer.png";
import graphical from "./graphical.jpg";
import pic4 from "./ccc.jpg";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import whatsapp from "./whatsapp.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUs = () => {
    return (
        <div className="mybodyAbout">
            <h1 className="mytitleAbout" id="slogan">ABOUT FORGE</h1>
            <div>
                <img src={image1} id="image1About"></img>
            </div>
            <div className="cardabout">
                <h3 id="introAbout">
                    Introduction
                </h3>
                <br></br>
                <p id="introParaAbout">
                    The aim of the project is to develop a game engine that would be eligible for competing in the
                    current market. This can be achieved by providing features that are not directly available to users on
                    other commercial engines and would require workarounds to be added. Additionally, allowing the
                    engine to have a “shallow learning curve” would attract more users from different technicalities. To
                    put this into effect, the engine would support scripting in an easy to learn language (ex. Lua, Python
                    Visual Scripting, etc), provide a comprehensive documentation of the engine’s API, design a user
                    friendly editor for the engine that is easy to navigate or construct a series of tutorials that would
                    outline the basic and unique features of the engine. Thus, the primary goal of the engine is to
                    identify deficits existing in leading game engines and develop solutions to these problems, or focus
                    on a specific niche and evolve it.
                    Another significant purpose to the project is to learn the process of game engine development and
                    how to implement the underlying systems that all depend on prior knowledge in computer
                    architecture, algorithms and data structures, mathematics and graphics. Having a solid
                    background in these concepts will help in researching and developing new features for the engine.
                </p>
                <Container id="tableAbout" >
                    <Row >
                        <Col>
                            <Card id="container1About">
                                <Card.Img variant="top" src={pic4} />
                                <Card.Body>
                                    <Card.Title>Full access to C++ source code</Card.Title>
                                    <Card.Text>
                                        With free access to all C++ source code, you can study, customize, extend, and debug the entirety of Unreal Engine, and ship your project without obstruction. Our source code repository on GitHub is continually updated as we develop features in our own mainline, so you don’t even have to wait for the next product release to get your hands on the very latest code.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="container2About">
                                <Card.Img variant="top" src={multiplayer} />
                                <Card.Body>
                                    <Card.Title>Robust multiplayer framework</Card.Title>
                                    <Card.Text>
                                        For over two decades, Unreal Engine’s multiplayer framework has been battle-tested across many platforms and game types to produce some of the industry’s most engaging multiplayer experiences. Unreal Engine ships with a scalable and proven client/server architecture to bring instant viability to any project’s multiplayer component.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="container3About">
                                <Card.Img variant="top" src={graphical} />
                                <Card.Body>
                                    <Card.Title>Industry-leading graphics</Card.Title>
                                    <Card.Text>
                                        Achieve awe-inspiring visual content out of the box with Unreal Engine’s physically based rasterized and ray-traced rendering. Take advantage of advanced dynamic shadow options, screenspace and true 3D reflections, versatile lighting tools, and a flexible node-based material editor to create the most realistic real-time content imaginable.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div id="footerabout">
                <footer className="footer-distributed">

                    <div className="footer-right">

                        <a href="https://www.instagram.com/"><img src={instagram} id="inst"></img></a>
                        <a href="https://www.facebook.com/"><img src={facebook} id="face"></img></a>
                        <a href="https://www.whatsapp.com/"><img src={whatsapp} id="whats"></img></a>
                    </div>

                    <div className="footer-left">

                        <p className="footer-links">
                            <a className="link-1" href="/home">Home</a>

                            <a href="/AboutUs">About Us</a>

                            <a href="#">Documentation</a>

                        </p>

                        <p>Forge Engine &copy; 2022</p>
                    </div>

                </footer>
            </div>
        </div>


    );
};
export default AboutUs;