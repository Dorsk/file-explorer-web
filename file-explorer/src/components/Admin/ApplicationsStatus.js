import React from "react";

const services = [
  { name: "Appli 1", status: "Offline" },
  { name: "Appli 2", status: "Offline" },
  { name: "Appli 3", status: "Online" },
  { name: "Appli 4", status: "Online" },
];

const ApplicationsStatus = () => {
  return (
    <div>
      <h2>Applications Status</h2>
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

export default ApplicationsStatus;
