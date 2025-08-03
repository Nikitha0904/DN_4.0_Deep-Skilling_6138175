import React from 'react';
import './App.css';

function App() {
  const element = "Office Space";

const jsxatt = <img src="/image.png" width="25%" height="25%" alt="Office Space" />;

  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const offices = [
    { Name: "Tech Hub", Rent: 75000, Address: "Bangalore" },
    { Name: "Innovate Co.", Rent: 45000, Address: "Hyderabad" },
    { Name: "City Works", Rent: 60000, Address: "Mumbai" },
    { Name: "Global HQ", Rent: 90000, Address: "Delhi" },
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={ItemName.Rent <= 60000 ? 'textRed' : 'textGreen'}>
        Rent: Rs. {ItemName.Rent}
      </h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr />

      {offices.map((office, index) => (
        <div key={index}>
          <h1>Name: {office.Name}</h1>
          <h3 className={office.Rent <= 60000 ? 'textRed' : 'textGreen'}>
            Rent: Rs. {office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
          {index < offices.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}

export default App;