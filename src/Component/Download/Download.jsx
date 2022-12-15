import "./Download.css";
import Container from 'react-bootstrap/Container';
import { Card } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import unity from "./unreal.png"
import unreal from "./unreal.png"
import flax from "./flax.png"
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import whatsapp from "./whatsapp.png";

function Download() {
    return (
        <div>
            <div >
                <div>
                    <Container id="tableDownload" >
                        <Row >
                            <Col>
                                <Card id="container1Download">
                                    <Card.Img variant="top" src={unity} />
                                    <Card.Body>
                                        <Card.Title>Unity</Card.Title>
                                        <Card.Text>
                                            Unity is one of the leading game engines in the field.
                                        </Card.Text>
                                        <Card.Link>https://unity.com/download</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card id="container2Download">
                                    <Card.Img variant="top" src={unreal} />
                                    <Card.Body>
                                        <Card.Title>Unreal</Card.Title>
                                        <Card.Text>
                                            Unreal is one of the best game engines in designing.
                                        </Card.Text>
                                        <Card.Link>https://www.unrealengine.com/en-US/download</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card id="container3Download">
                                    <Card.Img variant="top" src={flax} />
                                    <Card.Body>
                                        <Card.Title>Flax</Card.Title>
                                        <Card.Text>
                                            Flax is an upcoming game engine.
                                        </Card.Text>
                                        <Card.Link>https://flaxengine.com/download/</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>
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
    )
}

export default Download;