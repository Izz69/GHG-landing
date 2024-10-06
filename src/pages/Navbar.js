import "../styles/navbar.css"
// import logo from "../assests/assests/buds_logo.png";

export default function Navbar(){
    return(<>
    
    <div class="navi">
        <div class="left-side">
            <ul>
                {/* <li><img src={logo} /></li> */}
                <li><span class="menu">
                // <li><a href="#">Register</a></li>
                // <li><a href="#">About Us</a></li>
                // <li><a href="#">Contact Us</a></li>
                </span></li>

            </ul>
        </div>
        <div class="right-side">
            <ul>
                <li>
                    // <button id="button1">SIGN IN</button>
                </li>
                <li>
                    // <button id="button2">LOGIN</button>
                </li>

            </ul>
        </div>
    </div>




    </>);
}
