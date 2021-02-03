import React from "react";
import { Link } from "react-router-dom";

function AboutUs () {
  return (
    <div>
      About Us
      Navigate to <Link to="/" replace={true}>Home</Link>
    </div>
  )
}

export default AboutUs
