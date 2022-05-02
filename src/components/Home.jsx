import React from "react";
import Products from "./Products";
import bg from "./bg.jpg"
export default function Home() {
  return (
    <div>
     <div className="card bg-dark text-white border-0">
      
        <img src={bg} height="580px" alt="origina;" className="card-img"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className=" text-end me-5">
            <h5 className="card-title display-3 fw-bolder mb-0 ">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2 fw-bold">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <div>
          <Products/>
      </div>
    </div>
  );
}
