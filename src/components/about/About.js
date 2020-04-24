import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../Footer';
import './About.css';


function About() {
    
    return(
        <>
        <Header />

        <div className="about-team-body">
            <div className="about-intro">
                <h1 className="abouth1">Our Team</h1>
                <p className="about-team">Meet the team behind Fetch!</p>
            </div>
            <div className="team-members">
                <div className="member-1">
                    
                    {/* ATTN: Please leave the commented-out image links as is for now.
                    We'll need to get "headshots"/"profile photos" from the team for me to edit before 
                    we can use those lines */}
                    
                    {/* <img className="headshot" src={Calendar} alt='Scott'/> */}
                    <div className="member-photo"></div>
                    <div className="member-content">
                        <h2 className="member-name">Scott</h2>
                        <h3 className="member-title">Title</h3>
                    </div>
                    <p className="about-member">Taxidermy 90's man braid tumblr succulents literally paleo tote bag swag meh salvia art party you probably haven't heard of them sartorial. Etsy franzen pork belly williamsburg heirloom.</p>
                    <div className="social-links">
                        <div className="github">
                            <a href="/" title="GitHub"><i className="icon-social-github"></i></a>
                        </div>
                        <div className="linkedin">
                            <a href="/" title="LinkedIn"><i className="icon-social-linkedin"></i></a>
                        </div>
                        <div className="portfolio">
                            <a href="/" title="Portfolio"><i class="icon-globe"></i></a>
                        </div>
                    </div>
                </div>

                <div className="member-2">
                    {/* <img className="headshot" src={Calendar} alt='Gracie'/> */}
                    <div className="member-photo"></div>
                    <div className="member-content">
                        <h2 className="member-name">Gracie</h2>
                        <h3 className="member-title">Title</h3>
                    </div>
                    <p className="about-member">Taxidermy 90's man braid tumblr succulents literally paleo tote bag swag meh salvia art party you probably haven't heard of them sartorial. Etsy franzen pork belly williamsburg heirloom.</p>
                    <div className="social-links">
                        <div className="github">
                            <a href="/" title="GitHub"><i className="icon-social-github"></i></a>
                        </div>
                        <div className="linkedin">
                            <a href="/" title="LinkedIn"><i className="icon-social-linkedin"></i></a>
                        </div>
                        <div className="portfolio">
                            <a href="/" title="Portfolio"><i class="icon-globe"></i></a>
                        </div>
                    </div>
                </div>

                <div className="member-3">
                    {/* <img className="headshot" src={Calendar} alt='Carly'/> */}
                    <div className="member-photo"></div>
                    <div className="member-content">
                        <h2 className="member-name">Carly</h2>
                        <h3 className="member-title">Title</h3>
                    </div>
                    <p className="about-member">Taxidermy 90's man braid tumblr succulents literally paleo tote bag swag meh salvia art party you probably haven't heard of them sartorial. Etsy franzen pork belly williamsburg heirloom.</p>
                    <div className="social-links">
                        <div className="github">
                            <a href="https://github.com/carlynicholson" title="GitHub"><i className="icon-social-github"></i></a>
                        </div>
                        <div className="linkedin">
                            <a href="https://www.linkedin.com/in/carlypnicholson/" title="LinkedIn"><i className="icon-social-linkedin"></i></a>
                        </div>
                        <div className="portfolio">
                            <a href="https://carlynicholson.github.io/portfolio/" title="Portfolio"><i class="icon-globe"></i></a>
                        </div>
                    </div>
                </div>

                <div className="member-4">
                    {/* <img className="headshot" src={Calendar} alt='Brandon'/> */}
                    <div className="member-photo"></div>
                    <div className="member-content">
                        <h2 className="member-name">Brandon</h2>
                        <h3 className="member-title">Title</h3>
                    </div>
                    <p className="about-member">Taxidermy 90's man braid tumblr succulents literally paleo tote bag swag meh salvia art party you probably haven't heard of them sartorial. Etsy franzen pork belly williamsburg heirloom.</p>
                    <div className="social-links">
                        <div className="github">
                            <a href="/" title="GitHub"><i className="icon-social-github"></i></a>
                        </div>
                        <div className="linkedin">
                            <a href="/" title="LinkedIn"><i className="icon-social-linkedin"></i></a>
                        </div>
                        <div className="portfolio">
                            <a href="/" title="Portfolio"><i class="icon-globe"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        
        <Footer />
        </div>


        </>
    )
}

export default About;