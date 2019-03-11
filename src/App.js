import React, { Component } from "react";
import "./App.css";
import { Nav, NavDropdown, Navbar, Form, Col, Button } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <div class="header-wrapper">
          <div class="header">
            <div>
              <span class="number-text">CALL US NOW</span>{" "}
              <a href="number">385.154.11.28.38</a>
            </div>
            <div class='header-btns'>
              <span class="login">LOGIN</span>{" "}
              <span class="sign-up">SIGNUP</span>
            </div>
          </div>
        </div>
        <section>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home" style={{paddingLeft: "4rem", display: "flex", justifyContent:"space-between"}}>
              <span className="logo">Your <strength style={{color:"#FF5703"}}>Logo</strength></span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Title 1" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    SUBMENU 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    SUBMENU 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    SUBMENU 3
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Title 2" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    SUBMENU 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    SUBMENU 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    SUBMENU 3
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Title 3" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    SUBMENU 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    SUBMENU 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    SUBMENU 3
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Title 4" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    SUBMENU 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    SUBMENU 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    SUBMENU 3
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Title 5" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    SUBMENU 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    SUBMENU 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    SUBMENU 3
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Title 6" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    SUBMENU 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    SUBMENU 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    SUBMENU 3
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Title 7" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    SUBMENU 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    SUBMENU 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    SUBMENU 3
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav />
            </Navbar.Collapse>
          </Navbar>
        </section>

        <section>
          <div class="main-title">
            <h5>
              Home / Who we are / <span class="contact-span">Contact</span>
            </h5>
          </div>

          <div class="nav-main-content">
            <h1>Contact</h1>
            <p className="main-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </section>

        <div className="contact-info">
          <div className="contact-inputs">
          <h2>CONTACT US</h2>
          <hr/>
            <Form.Group controlId="formGridAddress1">
              <Form.Control placeholder="Name*" />
            </Form.Group>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control placeholder="Phone*" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control placeholder="Email*" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress2">
                <Form.Control placeholder="Message*" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

          </div>
          <div class="contact-details">
          <h2>REACH US</h2>
          <hr/>
            <p>Coalition Skills Test</p>
            <p>535 La Plata Street <br/> 4200 Argentina</p>
            <span>Phone:385.154.11.28.38</span>
            <p>Fax:385.154.35.66.78</p>
          <div class="fa-icons">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter-square"></i>            
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-pinterest-square"></i>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
