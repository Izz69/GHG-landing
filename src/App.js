// import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Thirdpage from "./pages/page3";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Fourthpage from "./pages/page4";
// import Secondpage from "./pages/page2";
import Fifthpage from "./pages/page5";
import Developers from "./pages/Developers";
import ContactUs from "./pages/Contact";
import {Routes,Route} from "react-router-dom";
import Product from "./pages/Product";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <div className="body">

              
             <Navbar />
              <Home />
               {/* <Secondpage /> */}
               <Thirdpage />
               <Product/> 

              {/* <Fourthpage /> */}
              <Fifthpage /> 
            </div>
          }
        />
        <Route
          path="/devs"
          element={
            <div className="body">
              {/* <Developers /> */}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
