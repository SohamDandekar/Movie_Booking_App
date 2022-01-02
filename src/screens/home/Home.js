import * as React from "react";
import { Component } from "react";
import { Header } from "../../common/header/Header";
import "./Home.css";
import { moviesData } from "../../common/moviesData";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

const flexContainer = {
  flexWrap: "nowrap",
  // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  transform: "translateZ(0)",
};

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      moviesData: moviesData,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <span className="heading">Upcoming Movies</span>
        <ImageList style={flexContainer} cols={6} rowHeight={250}>
          {this.state.moviesData.map((item) => (
            <ImageListItem className="imageListItem" key={item.id}>
              <img src={item.poster_url} alt="movie image" />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
        <div className="flex-container">
          <div className="left">
            <ImageList cols={4} rowHeight={350} gap={20}>
              {this.state.moviesData.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    src={item.poster_url}
                    alt="movie image"
                  />
                  <ImageListItemBar title={item.title} subtitle={"Release Date:" + new Date(item.release_date).toLocaleDateString(undefined, { weekday: 'short', year: "numeric", month: "short", day: "numeric" }).replaceAll(',','')} />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
