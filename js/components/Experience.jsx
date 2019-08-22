import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Experience extends Component {

    render() {
        return (
            <Fade>
                <div>
                    <div className="link-div">
                        <p>You will find all my previous experience in here and also, you can download a copy of my resume.</p>
                        <a className="download-resume-link" href="../../assets/alberto-robles-resume-web-developer.pdf">Download Resume</a>
                    </div> 
                    <div className="experience-block">
                        <h3>Web Developer & Designer</h3>
                        <h3>Nexus Education Consulting</h3>
                        <h4 className="exp-dates">Aug 18 - Aug 19</h4>
                        <h4>Vancouver, BC</h4>
                        <ul>
                            <li>Designed, implemented and monitored web pages and sites for continuous improvement.</li>
                            <li>Connected the website with different API such as: MailChimp, Edvisor, among others.</li>
                            <li>Tested websites and performed troubleshooting prior to deployment.</li>
                            <li>Designed sites to be compatible with top browsers, including Firefox, Chrome and Safari.</li>
                            <li>Used programming capabilities in PHP, SQL and JavaScript and other libraries as needed.</li>
                            <li>Established web hosting for site and uploaded site files to hosting account.</li>
                        </ul>
                    </div>
                    <div className="experience-block">
                        <h3>WordPress Developer</h3>
                        <h3>Mapatrail</h3>
                        <h4 className="exp-dates">Jan 19 - Jul 19</h4>
                        <h4>Vancouver, BC</h4>
                        <ul>
                            <li>Designed, implemented and monitored web pages and sites for continuous improvement.</li>
                            <li>Connected the website with different API such as: Stripe, Printful, MapTiler, among others.</li>
                            <li>Tested websites and performed troubleshooting prior to deployment.</li>
                            <li>Designed sites to be compatible with top browsers, including Firefox, Chrome and Safari.</li>
                            <li>Used programming capabilities in PHP, SQL and JavaScript and other libraries as needed.</li>
                            <li>Established web hosting for site and uploaded site files to hosting account.</li>
                            <li>Built and styled new mobile-friendly websites.</li>
                            <li>Determined coding requirements for site creation, including e-commerce capability and specialized scripts.</li>
                        </ul>
                    </div>
                    <div className="experience-block">
                        <h3>Lead Developer</h3>
                        <h3>The Walking School Bus</h3>
                        <h4 className="exp-dates">May 18 - Jul 18</h4>
                        <h4>Vancouver, BC</h4>
                        <ul>
                            <li>Elected Lead Developer of a Team of 4</li>
                            <li>Community Project at RED Academy for a NGO that helps children in Uganda and India through Nutrition and Education.</li>
                            <li>Tested websites and performed troubleshooting prior to deployment.</li>
                            <li>Designed sites to be compatible with top browsers, including Firefox, Chrome and Safari.</li>
                            <li>Used programming capabilities in PHP, SQL and JavaScript and other libraries as needed.</li>
                            <li>Managed merging conflicts, set deadlines to co-workers, reviewed their code.</li>
                            <li>Built and styled new mobile-friendly websites.</li>
                        </ul>
                    </div>
                    <div className="experience-block">
                        <h3>General Manager</h3>
                        <h3>Cancun Style Car Rental</h3>
                        <h4 className="exp-dates">Aug 15 - Jan 18</h4>
                        <h4>Cancún, Mexico</h4>
                        <ul>
                            <li>In charge of administrative duties.</li>
                            <li>Managed a team of 3 people.</li>
                            <li>Departments under my supervision: Sales, Customer Service, Web Development.</li>
                            <li>Managed website (design and development)</li>
                        </ul>
                    </div>
                </div>
            </Fade>
        )
    }
}