import React, { Component } from "react";
import image1 from "../Media/cake-7.jpg";
import image2 from "../Media/cake-6.jpg";
import image3 from "../Media/cake-5.jpg";
import image4 from "../Media/cake-3.webp";
import bis1 from "../Media/biscuit-2.webp";
import bis2 from "../Media/biscuit-3.webp";
import bis3 from "../Media/biscuit-4.webp";
import cff1 from "../Media/coffee-2.jpg";
import cff2 from "../Media/coffee-3.jpg";
import cff3 from "../Media/coffee-1.jpg";
import mlk1 from "../Media/milkshake-1.webp";
import mlk2 from "../Media/milkshake-2.jpg";
import mlk3 from "../Media/milkshake-3.jpg";
import { Card, CardContent } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import "../../App.css";

const CardItem = [
  {
    src: image1,
    text: "Get 25% OFF on your Favourite and Yummy Red Velvet",
    label: "Order",
    path: "/services",
  },
  {
    src: image2,
    text: "Customized Birthday cake at your door step just for Rs 499",
    label: "Order",
    path: "/services",
  },
  {
    src: image3,
    text: "Munch some of our rich in protein Dry-Fruit cake with 50% special dicount",
    label: "Order",
    path: "/services",
  },
  {
    src: image4,
    text: "Get some sclices of Berries Cake for you kiddoz for only Rs 199",
    label: "Order",
    path: "/services",
  },
];

const CardItem2 = [
  {
    src: bis1,
    text: "Get a pack of mixed Cream Macron for Rs 50 only",
    label: "order",
    path: "/services",
  },
  {
    src: bis2,
    text: "Special Pineapple Bicuits only for Limited period",
    label: "order",
    path: "/services",
  },
  {
    src: bis3,
    text: "Get a Flovour of crunchy biscuits with Cinamon touch",
    label: "order",
    path: "/services",
  },
];

const CardItem3 = [
  {
    src: cff1,
    text: "Enjoy the aroma of our Rare Arabic coffee",
    label: "order",
    path: "/services",
  },
  {
    src: cff2,
    text: "black coffee large cup for Rs 59 only",
    label: "order",
    path: "/services",
  },
  {
    src: cff3,
    text: "Cappuccino at it best with our free special cookies",
    label: "order",
    path: "/services",
  },
];

const CardItem4 = [
  {
    src: mlk1,
    text: "Buy Chocolate and Strawberry Milk Shake just for Rs 99",
    label: "order",
    path: "/services",
  },
  {
    src: mlk2,
    text: "Buy any 2 Flavours just for Rs 150",
    label: "order",
    path: "/services",
  },
  {
    src: mlk3,
    text: "Season Special Alphonsos Hapoos Mango Flavour with 25% OFF",
    label: "order",
    path: "/services",
  },
];

export default class Cards extends Component {
  render() {
    return (
      <div>
        <div>
          <h1
            style={{
              textAlign: "center",
              paddingTop: "80px",
              fontSize: "50px",
            }}
          >
            Today's Best Deals Waiting For You!
          </h1>
          <div>
            <h3
              style={{
                textAlign: "center",
                color: "rgb(139, 69, 19)",
                fontSize: "30px",
                fontFamily: "satisfy,cursive",
                marginTop: "50px",
              }}
            >
              Cakes made with love
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
                textAlign: "center",
                padding: "30px 90px 0px 90px",
              }}
            >
              {CardItem.map((x) => (
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={x.src}
                      title={x.title}
                      className="imageStyle"
                    />

                    <CardContent>
                      <div>{x.text}</div>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div>
                      <button
                        style={{
                          color: "white",
                          backgroundColor: "rgb(210,105,30)",
                          height: "35px",
                          width: "60px",
                          borderRadius: "4px",
                        }}
                      >
                        {x.label}
                      </button>{" "}
                    </div>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3
              style={{
                textAlign: "center",
                color: "rgb(139, 69, 19)",
                fontSize: "30px",
                fontFamily: "satisfy,cursive",
                marginTop: "90px",
              }}
            >
              Biscuits for you
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "40px",
                textAlign: "center",
                padding: "30px 90px 0px 90px",
                marginBottom: "70px",
              }}
            >
              {CardItem2.map((x) => (
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200px"
                      image={x.src}
                      title={x.title}
                      className="imageStyle"
                    />

                    <CardContent>
                      <div>{x.text}</div>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div>
                      <button
                        style={{
                          color: "white",
                          backgroundColor: "rgb(210,105,30)",
                          height: "35px",
                          width: "60px",
                          borderRadius: "4px",
                        }}
                      >
                        {x.label}
                      </button>{" "}
                    </div>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3
              style={{
                textAlign: "center",
                color: "rgb(139, 69, 19)",
                fontSize: "30px",
                fontFamily: "satisfy,cursive",
                marginTop: "90px",
              }}
            >
              Best of Coffee
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "40px",
                textAlign: "center",
                padding: "30px 90px 0px 90px",
                marginBottom: "70px",
              }}
            >
              {CardItem3.map((x) => (
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200px"
                      image={x.src}
                      title={x.title}
                      className="imageStyle"
                    />

                    <CardContent>
                      <div>{x.text}</div>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div>
                      <button
                        style={{
                          color: "white",
                          backgroundColor: "rgb(210,105,30)",
                          height: "35px",
                          width: "60px",
                          borderRadius: "4px",
                        }}
                      >
                        {x.label}
                      </button>{" "}
                    </div>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3
              style={{
                textAlign: "center",
                color: "rgb(139, 69, 19)",
                fontSize: "30px",
                fontFamily: "satisfy,cursive",
                marginTop: "90px",
              }}
            >
              chilled Shakes
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "40px",
                textAlign: "center",
                padding: "30px 90px 0px 90px",
                marginBottom: "70px",
              }}
            >
              {CardItem4.map((x) => (
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200px"
                      image={x.src}
                      title={x.title}
                      className="imageStyle"
                    />

                    <CardContent>
                      <div>{x.text}</div>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div>
                      <button
                        style={{
                          color: "white",
                          backgroundColor: "rgb(210,105,30)",
                          height: "35px",
                          width: "60px",
                          borderRadius: "4px",
                        }}
                      >
                        {x.label}
                      </button>{" "}
                    </div>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
