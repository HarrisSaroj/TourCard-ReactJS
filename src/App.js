import { useState } from "react";
import React from "react";
import Tours from "./components/Tours";
import data from './data';

const App = () => {


  // Jobhi data hai data.js mai usse initilize kiya hai useState ke use se
  const [tours, setTours] = useState(data);
 
  // Jabhi Button pr user Click krega NOt interested pr woo id filter hoga newTour mai aa jaega
  // Example : agar mai AGRA wle ko click kiya toh uski id match ho jaegi toh mai usse NewTour mai nahi daalunga 
  // or sab remaining wle ki id match nahi hogi toh mai usse NewTour mai daal dunga
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id); 
    setTours(newTours);
  }

  if(tours.length === 0){
    // Agar mujhe koi UI show krna hai toh return mai likhna hoga
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="button-white" onClick={() => setTours(data)}>
          Refresh 
        </button>
      </div>
    );
  }

  return(
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
