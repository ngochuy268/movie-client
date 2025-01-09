import logo from '../../images/logo1.png';
import { Form, Button, Row, Col } from 'react-bootstrap'; 
import React, { useState } from 'react';
import useFooterController from '../../controllers/Footer/footerController';
import ReCAPTCHA from 'react-google-recaptcha';


const Footer = () => {
    const { formData, handleChange, handleSubmit, captchaRef, handleCaptchaChange } = useFooterController();


    return (
        <>
            <footer className="ht-footer">
                <div className="container">
                    <div className="flex-parent-ft">
                        <div className="flex-child-ft item1">
                            <a href="#"><img className="logo" src={logo} alt=""/></a>
                            <p>5th Avenue st, manhattan<br/>
                            New York, NY 10001</p>
                            <p>Call us: <a href="#">(+01) 202 342 6789</a></p>
                        </div>
                        <div className="flex-child-ft item2">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">About</a></li> 
                                <li><a href="#">Blockbuster</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Forums</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Help Center</a></li>
                            </ul>
                        </div>
                        <div className="flex-child-ft item3">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Terms of Use</a></li> 
                                <li><a href="#">Privacy Policy</a></li>	
                                <li><a href="#">Security</a></li>
                            </ul>
                        </div>
                        <div className="flex-child-ft item4">
                            <h4>Account</h4>
                            <ul>
                                <li><a href="#">My Account</a></li> 
                                <li><a href="#">Watchlist</a></li>	
                                <li><a href="#">Collections</a></li>
                                <li><a href="#">User Guide</a></li>
                            </ul>
                        </div>
                        <div className="flex-child-ft item5">
                        <h4>Contact Us</h4>
                            <p>We would love to hear from you! Please fill out the form below.</p>
                            <div className="contact-form">
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Form.Group as={Col} md="6">
                                            <Form.Control
                                                type="text"
                                                placeholder="Your Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Control
                                                type="email"
                                                placeholder="Your Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            placeholder="Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className='form-textarea'
                                        />
                                    </Form.Group>
                                    <div className="recaptcha">
                                        <ReCAPTCHA
                                            ref={captchaRef}
                                            sitekey="6LefuK4qAAAAAFSbFowPpF5psik_vqc5k3-nRQ8l"
                                            onChange={handleCaptchaChange}
                                        />
                                    </div>
                                    <Button variant="primary" type="submit">
                                        Send Message
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-copyright">
                    <div className="ft-left">
                        <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
                    </div>
                    <div className="backtotop">
                        <p><a href="#" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up"></i></a></p>
                    </div>
                </div>
               
            </footer>
        </>
    )
}

export default Footer;