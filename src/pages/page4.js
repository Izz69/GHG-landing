import "../styles/page4.css";
import logo from "../assests/assests/french.jpg";
import eventpic from "../assests/assests/nature.jpg";
import card1 from "../assests/assests/card1.png"
import card2 from "../assests/assests/card2.png"
export default function Fourthpage() {
  return (
    <>
      <div class="page4">
        <div class="buds-intro">
          <div class="left-side">
            <div class="image">
              <img src={logo} class="logo" />
            </div>
            <div class="text">
            Acknowledging the global nature of climate change fosters international collaboration, encouraging countries to work together on solutions that benefit all and contribute to global climate agreements, like the Paris Agreement.


            </div>
          </div>
          <div class="right-side">
            <div class="imagecontainer">
              <img src={eventpic} class="event" alt="" />
            </div>
          </div>
        </div>

        {/* <div class="card-container">
          <div class="imagecontainer">
            <img src={card1} alt="" />
          </div>
          <p>
          Collaborate & Compete with top Coders
          </p>
          <a href="">
            <button>Show All Listings</button>
          </a>
        </div>

        <div class="card-container">
          <div class="imagecontainer">
            <img src={card2} alt="" />
          </div>
          <p>
          Make your Ideas a reality in our Society. Find a team to built with.
          </p>
          <a href="">
            <button>Show All Listings</button>
          </a>
        </div> */}
      </div>
    </>
  );
}
