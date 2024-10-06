import "../styles/slider.css";
import Card from "./card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Eventslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      title: "Code in The Dark",
      logo: "https://example.com/logo1.png",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      title: "Power Bi",
      logo: "https://example.com/logo2.png",
    },
  ];
  return (
    <>
      <div class="body">
        <Slider {...settings}>
          {/* {data.map((d,index) => {
            <Card key={index} image={d.image} title={d.title} logo={d.logo} />;
         
          })} */}
  <Card/>
  <Card/>
  <Card/>
  <Card/><Card/><Card/>
  
        </Slider>
      </div>
    </>
  );
}
