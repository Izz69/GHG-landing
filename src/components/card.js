import "../styles/card.css";

export default function Card({ image, title, logo }) {
  return (
    // <div
    //   className="cardcontainer"
    //   style={{
    //     background: `url(${image})`, // Use the image prop dynamically
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //     {((d)=>{console.log("Image:", d.image);
    //            console.log("Title:", d.title);
    //            console.log("Logo:", d.logo);})
               
    //     }
    //   <div className="uppercontainer">
    //     <button>LIVE NOW</button>
    //   </div>
    //   <div className="lowercontainer">
    //     <div className="innercontainer">
    //       <div className="group1">
    //         {logo && <img src={logo} alt="Logo" />} {/* Render logo if available */}
    //         <h3>{title}</h3>
    //       </div>
    //       <div className="group2">
    //         by <span>BUDS</span>
    //       </div>
    //     </div>
    //     <button>JUMP IN</button>
    //   </div>
    // </div>

    <div
      className="cardcontainer"
      
    >
        {((d)=>{console.log("Image:", d.image);
               console.log("Title:", d.title);
               console.log("Logo:", d.logo);})
               
        }
      <div className="uppercontainer">
        <button>LIVE NOW</button>
      </div>
      <div className="lowercontainer">
        <div className="innercontainer">
          <div className="group1">
            {logo && <img src="" alt="Logo" />} 
            <h3>CODE IN THE DARK</h3>
          </div>
          <div className="group2">
            by <span>BUDS</span>
          </div>
        </div>
        <button>JUMP IN</button>
      </div>
    </div>
  );
}
