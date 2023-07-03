import React, { Component } from "react";
import { Link } from "react-router-dom";
import CakeIcon from "@material-ui/icons/Cake";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: " #242424",
            color: "white",
            paddingBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "70px",
              fontSize: "30px",
            }}
          >
            Get 30% off on your first order
          </div>
          <div
            style={{
              fontSize: "22px",
              fontFamily: "cursive",
              paddingTop: "30px",
            }}
          >
            {" "}
            Celebrate every occassion with delicious cake at yout doorstep
          </div>

          <div
            style={{
              display: "flex",
              paddingTop: "70px",
              justifyContent: "space-between",
              width: "90%",
              // padding: "70px 50px 0px 50px",
            }}
          >
            <di
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0px 40px",
                // margin: "0px 50px",
              }}
            >
              <h2>About Us</h2>
              {/* <Link>How it works</Link> */}
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Testimonials
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Terms of Service
              </Link>
            </di>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0px 40px",
              }}
            >
              <h2>Contact Us</h2>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Contact
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Support
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Donations
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0px 40px",
              }}
            >
              <h2>Workshops</h2>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Free Trials
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Full Courses
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0px 80px",
                // paddingBottom: "30px",
              }}
            >
              <h2>Social Media</h2>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Facebook
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Instagram
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Youtube
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "2px",
                }}
                to="/"
              >
                Twitter
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "90px",
            }}
          >
            <FacebookIcon style={{ padding: "0px 10px" }} />
            <InstagramIcon style={{ padding: "0px 10px" }} />
            <YouTubeIcon style={{ padding: "0px 10px" }} />
            <TwitterIcon style={{ padding: "0px 10px" }} />
          </div>
        </div>
      </div>
    );
  }
}
