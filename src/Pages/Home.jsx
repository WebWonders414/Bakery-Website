import React, { Component } from "react";
import vid from "../Media1/vid01.mp4";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <video
            style={{
              objectFit: "cover",
              width: "99%",
              height: "100%",
              position: "absolute",
              zIndex: "-1",
            }}
            src={vid}
            autoPlay
            loop
            muted
          />
          <h1
            style={{
              marginTop: "120px",
              color: "white",
              fontWeight: "bold",
              fontSize: "60px",
            }}
          >
            Taste of Happiness
          </h1>
          <div
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "cursive",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Didn't try yet?
            </h2>
            <Link to="/Products">
              <button
                style={{
                  width: "250px",
                  height: "30px",
                  fontSize: "15px",
                  backgroundColor: "rgb(210,105,30)",
                  fontWeight: "bold",
                  border: "1px solod black",
                  borderRadius: "4px",
                }}
              >
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
