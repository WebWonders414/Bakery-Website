// import { Button } from "@material-ui/core";
// import React, { Component } from "react";
// import CakeIcon from "@material-ui/icons/Cake";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// const MenuItems = [
//   {
//     title: "Home",
//     url: "/",
//     cName: "nav-links",
//     color: "red",
//   },
//   {
//     title: "Products",
//     url: "Products",
//     cName: "nav-links",
//     color: "blue",
//   },
//   {
//     title: "About Us",
//     url: "AboutUs",
//     cName: "nav-links",
//     color: "yellow",
//   },
// ];

// export default class Navbar extends Component {
//   render() {
//     return (
//       <>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             height: "100px",
//             position: "sticky",
//             background:
//               "linear-gradient(-45deg,rgb(139,69,19),rgb(210,105,30))",
//           }}
//         >
//           <div>
//             <h1
//               style={{
//                 fontSize: "40px",
//                 fontFamily: "cursive",
//                 display: "flex",
//               }}
//               className="logo"
//             >
//               <div
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 Creamy
//               </div>

//               <div className="logo-icon">
//                 <CakeIcon
//                   style={{
//                     fontSize: "50px",
//                     marginTop: "4px",
//                     marginLeft: "5px",
//                     color: "rgb(0,0,0)",
//                   }}
//                 />
//               </div>
//             </h1>
//           </div>

//           <div style={{ display: "flex" }}>
//             {MenuItems.map((x) => (
//               <div
//                 style={{
//                   margin: "0px 10px 0px 10px",
//                 }}
//               >
//                 <Link to={x.url} style={{ textDecoration: "none" }}>
//                   <p className={x.cName}>{x.title}</p>
//                 </Link>
//               </div>
//             ))}

//             <div>
//               <Button
//                 variant="outlined"
//                 style={{
//                   margin: "20px 40px 0px 10px",
//                   backgroundColor: "black",
//                   color: "white",
//                 }}
//               >
//                 Sign Up
//               </Button>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

import React, { Component } from "react";
import CakeIcon from "@material-ui/icons/Cake";
import { Link } from "react-router-dom";
import { Button, ThemeProvider, createTheme } from "@material-ui/core";
import "./Navbar.css";
import LoginForm from "../Pages/LoginForm";
const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    color: "red",
  },
  {
    title: "Products",
    url: "/Products",
    cName: "nav-links",
    color: "blue",
  },
  {
    title: "About Us",
    url: "/AboutUs",
    cName: "nav-links",
    color: "yellow",
  },
];

// const buttonStyle = createTheme({
//   overrides: {
//     MuiButton: {
//       root: {
//         borderRadius: "20px",
//       },
//       outlined: {
//         color: "white",
//         background: "orange",
//       },
//     },
//   },
// });

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openLogin: false,
    };
  }

  loginForm = () => {
    this.setState({
      openLogin: true,
    });
  };

  handleClose = () => {
    this.setState({
      openLogin: false,
    });
  };
  render() {
    return (
      <>
        <nav>
          <div className="navbar">
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <div className="logo">
                <div className="logo-name">Creamy</div>
                <div className="logo-icon">
                  <CakeIcon
                    style={{
                      fontSize: "40px",
                      marginTop: "10px",
                      marginLeft: "5px",
                    }}
                  />
                </div>
              </div>
            </Link>

            <div className="nav-item">
              <div
                className="nav-items"
                style={{ marginRight: "40px", display: "flex" }}
              >
                {MenuItems.map((x) => (
                  <Link style={{ textDecoration: "none" }} to={x.url}>
                    <p className={x.cName}>{x.title}</p>
                  </Link>
                ))}
              </div>
              <div>
                <button
                  onClick={this.loginForm}
                  style={{
                    height: "30px",
                    width: "80px",
                    borderRadius: "9px",
                    marginRight: "40px",
                    backgroundColor: "rgb(233, 223, 223)",
                    border: "1px solid black",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <LoginForm
            handleClose={this.handleClose}
            open={this.state.openLogin}
          />
        </div>
      </>
    );
  }
}
