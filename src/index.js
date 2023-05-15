import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import "flickity-as-nav-for";

function App() {
  return (
    <div className="App">
      <Flickity
        className="carousel-nav"
        options={{
          asNavFor: ".carousel-main",
          contain: true,
          pageDots: false
        }}
      >
        <div class="carousel-cell-1" />
        <div class="carousel-cell-1" />
        <div class="carousel-cell-1" />
        <div class="carousel-cell-1" />
        <div class="carousel-cell-1" />
        <div class="carousel-cell-1" />
        <div class="carousel-cell-1" />
        <div class="carousel-cell-1" />
        <div class="carousel-cell-1" />
        <div class="carousel-cell-1" />
      </Flickity>

      <Flickity className="carousel-main">
        <div class="carousel-cell" />
        <div class="carousel-cell" />
        <div class="carousel-cell" />
        <div class="carousel-cell" />
        <div class="carousel-cell" />
        <div class="carousel-cell" />
        <div class="carousel-cell" />
        <div class="carousel-cell" />
        <div class="carousel-cell" />
        <div class="carousel-cell" />
      </Flickity>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
