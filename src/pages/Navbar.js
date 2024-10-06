import "../styles/navbar.css"
// import logo from "../assests/assests/buds_logo.png";

export default function Navbar(){
    return(<>
    
    <div class="navi">
        <div class="left-side">
            <ul>
                {/* <li><img src={logo} /></li> */}
                <li><span class="menu">
                 <li><a href="#"><h2>GHG Insights</h2></a></li>
            
                </span></li>

            </ul>
        </div>
        <div class="right-side">
            <ul>
                <li>
                    <h2>Stella Nova</h2>
                </li>

            </ul>
        </div>
    </div>




    </>);
}
