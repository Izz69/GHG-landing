import Eventslider from "../components/slider";
import Headslider from "../components/Headslider";
import "../styles/page2.css"
import Nav from "../components/nav";
export default function Secondpage(){
    
    return(<>
    <div class="pagebody">
    <Nav/>   
    <div class="tabs">
            <ul class="nav nav-tabs">
            <li class="nav-item">
                <a data-bs-toggle="tab" class="nav-link active" aria-current="page" href="#events">Events</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#heads" data-bs-toggle="tab">Heads</a>
            </li>
            </ul>
        <button>SEE ALL EVENTS</button>
    </div>
    <div class="tab-content">
        <div id="events" class="tab-pane active">
            <Eventslider/>
        </div>
        <div id="heads" class="tab-pane"><Headslider/></div>

    </div>
</div>
    
    
    
    </>)
}