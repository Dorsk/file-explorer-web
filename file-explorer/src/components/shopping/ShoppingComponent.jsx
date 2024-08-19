import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Importing a shopping cart icon from react-icons
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "./../../img/service-trad.jfif";
import logo4 from "./../../img/flowchart-ia.jfif";
import logo3 from "./../../img/tracerun.png";
import logo2 from "./../../img/car-editor.jfif";
import logoOdx from "./../../img/odx.png";
import logoELK from "./../../img/admin.png";

function ShoppingPage() {
  const items = [
    {
      id: 1,
      name: "Vehicle editor",
      image: logo4,
      price: "$850.00 / mounth",
    },
    {
      id: 2,
      name: "Flowchart Editor",
      image: logo2,
      price: "$650.00 / mounth",
    },
    {
      id: 3,
      name: "Trace Viewer",
      image: logo3,
      price: "$250.00 / mounth",
    },
    {
      id: 4,
      name: "Translation service",
      image: logo1,
      price: "$450.00 / mounth",
    },
    {
      id: 5,
      name: "ODX Viewer",
      image: logoOdx,
      price: "$550.00 / mounth",
    },
    {
      id: 6,
      name: "ELK Viewer",
      image: logoELK,
      price: "$150.00 / mounth",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Services disponibles</h1>
      <div className="row justify-content-between">
        {items.map((item) => (
          <div key={item.id} className="col-md-2 col-sm-4 text-center mb-4">
            <div className="card h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "150px", objectFit: "cover" }} // Image styling
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">
                  <FaShoppingCart className="me-2" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
