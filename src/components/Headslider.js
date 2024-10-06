import "../styles/sliderheads.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Head from "./head";
import "slick-carousel/slick/slick-theme.css";

export default function Headslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const data = [
    { designation: "President", name: "Muhammad Shahood Rehan", pfp: "" },
    { designation: "Vice President", name: "Raja Muhammad Hammad", pfp: "" },
    { designation: "General Secretary", name: "Rehab Khaleel", pfp: "" },
    { designation: "Head of Human Resources", name: "Adan Zaqaf", pfp: "" },
    { designation: "Head of Management Team", name: "Umer Shifa", pfp: "" },
    { designation: "Development Head", name: "Muhammad Basil Irfan Rizwi", pfp: "" },
    { designation: "Head of Graphic Design Team", name: "Muhammad Arqam", pfp: "" },
    { designation: "Media Head", name: "Fahad Gillani", pfp: "" },
    { designation: "Marketing Head", name: "Salman Ajmal", pfp: "" },
    { designation: "Creative Director", name: "Zara Ejaz", pfp: "" }
  ];
  
  return (
    <>
      <div class="body">
        <Slider {...settings}>
          
          <Head/>
          <Head/>
        
        </Slider>
      </div>
    </>
  );
}
