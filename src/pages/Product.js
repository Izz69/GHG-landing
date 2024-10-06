import { Link } from "react-router-dom";
import "../styles/product.css";
import image from "../assests/assests/map_final.jpg"
export default function Product() {
  return (
    <>
      <div class="productpage">
        <div class="pleftside">
          <h1>GHG Insight</h1>
          <p>
            Our cutting-edge data visualization software empowers organizations
            to track, analyze, and reduce greenhouse gas emissions with
            precision. Designed for sustainability professionals, policymakers,
            and environmental analysts, this intuitive platform transforms
            complex emissions data into easy-to-understand visual insights. With
            real-time analytics, customizable dashboards, and in-depth reporting
            tools, our software helps you make informed decisions, meet
            regulatory standards, and achieve sustainability goals.
          </p>
          <a href="https://stellanovaghg.streamlit.app/">Go to Product

          
          </a>
        </div>
        <div class="prightside">
              <div class="prightsideimage">
              <img src={image}></img>
              </div>
              
        </div>
      </div>
    </>
  );
}
