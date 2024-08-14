import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import carouselImage1 from "./../img/caroucel/release-note.jfif";
import carouselImage2 from "./../img/caroucel/roadmap-2025.jpeg";
import carouselImage3 from "./../img/caroucel/release-note.jfif";
import logo1 from "./../img/admin-page.jpg";
import logo4 from "./../img/flowchart-ia.jfif";
import logo3 from "./../img/tracerun.png";
import logo2 from "./../img/car-editor.jfif";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileStructure: {},
      fileReferences: {},
      fileContent: "",
      pages: [
        {
          name: "Vehicle editor",
          description: "Description for page 4.",
          logo: logo4,
          link: "/vehicleeditor",
        },
        {
          name: "Flowchart Editor",
          description: "Description for page 2.",
          logo: logo2,
          link: "/flowchart",
        },
        {
          name: "Trace Viewer",
          description: "Description for page 3.",
          logo: logo3,
          link: "/tracerun",
        },

        {
          name: "Administration",
          description: "Description for page 1.",
          logo: logo1,
          link: "/admin",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <div
          id="homePageCarousel"
          className="carousel slide mb-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={carouselImage1}
                className="d-block w-100 carousel-image"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carouselImage2}
                className="d-block w-100 carousel-image"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carouselImage3}
                className="d-block w-100 carousel-image"
                alt="Third slide"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homePageCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homePageCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row">
          {this.state.pages.map((page, index) => (
            <div className="col-lg-3 col-md-5 mb-3" key={index}>
              <div className="card h-100">
                <Link to={page.link} className="text-decoration-none text-dark">
                  <img
                    src={page.logo}
                    className="card-img-top p-3"
                    alt={page.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{page.name}</h5>
                    <p className="card-text">{page.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeComponent;
