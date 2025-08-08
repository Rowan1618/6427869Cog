import React from "react";

const office = {
  name: "DBS",
  rent: 50000,
  address: "Chennai",
  image: "https://images.unsplash.com/photo-1581093588401-23f71f3e5914?auto=format&fit=crop&w=600&q=80"
};

const OfficeList = () => {
  const rentColor = office.rent < 60000 ? "red" : "green";

  return (
    <div style={{ padding: "20px" }}>
      <h1><b>Office Space , at Affordable Range</b></h1>
      <img src={office.image} alt={office.name} width="300" height="300" />
      <h2><b>Name: {office.name}</b></h2>
      <p style={{ color: rentColor }}><b>Rent: Rs. {office.rent}</b></p>
      <p><b>Address: {office.address}</b></p>
    </div>
  );
};

export default OfficeList;
