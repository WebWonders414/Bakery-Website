//  --------------- CAKE WEBSITE => START  ------------------------- //
import React, { Component } from "react";
import Home from "./website/Pages/Home";
import Products from "./website/Pages/Products";
import Navbar from "./website/Navbar/Navbar";
import About from "./website/Pages/About";
import Footer from "./website/Pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
          </div>
          <div style={{ marginTop: "100px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Aboutus" element={<About />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

// ------------------ CAKE WEBSITE => END  ---------------------------------------------------- //

//  --------------- Admin Dashboard WEBSITE => START  ------------------------------------------ //

// import React, { Component } from "react";
// import Loginlanding from "./LOGIN/Loginlanding";
// import AdminLanding from "./AdminPanel/AdminLanding";
// import Error from "./LOGIN/Error";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Activity from "./AdminPanel/Activity";
// import Grid from "./AdminPanel/Grid";
// import Charts from "./AdminPanel/Charts";
// import LeftPanel from "./AdminPanel/LeftPanel";
// import Navbar from "./AdminPanel/Navbar";

// export default class App extends Component {
//   render() {
//     return (
//       <div className="app-container">
//         <Router>
//           <Navbar />

//           <div className="content-container">
//             <LeftPanel />
//             <Routes>
//               {/* <Route path="/" element={<Loginlanding />} /> */}
//               <Route path="/dashboard/home" element={<Activity />} />
//               <Route path="/dashboard/grid" element={<Grid />} />
//               <Route path="/dashboard/charts" element={<Charts />} />
//               {/* <Route path="/error" element={<Error />} /> */}
//             </Routes>
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

//  --------------- Admin Dashboard WEBSITE => END  ------------------------------------------ //
