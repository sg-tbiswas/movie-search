import React, { useState, useEffect } from "react";
import "./StarStyle.css";
const Star = ({ label, noofstar }) => {
  const percentage = label * 10 + "%";
  const style = {
    width: percentage,
  };

  return (
    <div className="star-rating">
      <div className="back-stars">
        {[...Array(noofstar)].map((x, i) => (
          <i className="fa fa-star-o" aria-hidden="true" key={i}></i>
        ))}
        <div className="front-stars" style={style}>
          {[...Array(noofstar)].map((x, i) => (
            <i className="fa fa-star" aria-hidden="true" key={i}></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Star;
