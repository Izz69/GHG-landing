import "../styles/page5.css"
import cube from "../assests/assests/cube.png"
import logo from "../assests/assests/bahria-university-logo.png"
import logo1 from "../assests/assests/insta.png"
import logo2 from "../assests/assests/Figma.png"
import logo3 from "../assests/assests/Twitter.png"
import {Link} from "react-router-dom";
export default function Fifthpage(){
    return(
        <>
      

        <div class="page5">
            {/* <div class="first-section">
                <div class="left-side">
                    <h3>COMPETE</h3>
                    <h5>Showcase Your Willingness to save Our home</h5>
                    <p>Join us in our mission to acknowledge the critical role greenhouse gases play in our changing climate. Together, we can carefully analyze their impacts and work towards effective solutions. Your participation is vital as we seek to understand the interplay between human-caused emissions and natural systems, and develop innovative approaches to combat climate change.

Be part of the solution.
<br/>join us in our efforts to protect our planet for future generations! Together, we can make a difference. 🌍💪</p>
                    <div class="buttons">
                        <a href=""><button id="button1">
                                LEARN MORE
                            </button></a>
                        <a href="">
                            <button id="button2">
                                PARTICIPATE
                            </button>
                        </a>
                    </div>
                </div>
                <div class="right-side">
                    <img src={cube} alt=""/>

                </div>

            </div> */}
            <div class="footer">

                <div class="firstrow">
    //                 <div class="imagecontainer">
    // <img src={logo} alt=""/>
                            
    //                 </div>
                    <div class="searchcontainer">
                        <h4>Subscribe</h4>
                        <p>
                        Subscribe to stay tuned for new web design and latest updates. Let's do it! 
                        </p>
                        <div class="subscription-container">
                            <input type="email" class="email-input" placeholder="Enter your email Address" required/>
                            <button class="get-started-button">Get Started</button>
                        </div>
                    
                    </div>
                    <div class="listcontainer">
                        <ul><li><a href="">About

                        </a></li>
                        <li><a href="">Register</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Team</a></li></ul>
                    </div>
                    <div class="iconcontainer">
                        <ul>
                            <li><a href=""><img src={logo1} alt=""/></a></li>
                            <li><a href=""><img src={logo2} alt=""/></a></li>
                            <li><a href=""><img src={logo3} alt=""/></a></li>
                        </ul>
                    </div>
                </div>
                <div class="secondrow">
                    <div class="left">
                        <p>© 2024 All Rights Reserved</p>
                    </div>
                    <div class="middle">
                        <ul>
                            <li><a href="">Privacy Policy</a></li>
                            <li>
                                <a href="">
                                    Terms Of Use
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Sales and Refund
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Legal
                                </a>
                            </li>
                            <li>
                                <Link to="/devs">
                                    Contact Developers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        <p>Society Mail
                        </p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
