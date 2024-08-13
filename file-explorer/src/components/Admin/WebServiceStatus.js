import React from "react";

const services = [
  { name: "Service 1", status: "Online" },
  { name: "Service 2", status: "Offline" },
  { name: "Service 3", status: "Online" },
  { name: "Service 4", status: "Online" },
];

const WebServiceStatus = () => {
  return (
    <div>
      <h2>Web Service Status</h2>
      <ul>
        {services.map((service, index) => (
          <li
            key={index}
            style={{ color: service.status === "Online" ? "green" : "red" }}
          >
            {service.name}: {service.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebServiceStatus;
