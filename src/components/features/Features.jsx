import React from "react";
import { Link } from "react-router-dom";

export default function Features(){

return(
<section className="features">
  
  <div className="feature">
  <Link to="/safe-zone-navigator" style={{ textDecoration: 'none', color: 'inherit' }}>
<h2>SAFE ZONE NAVIGATOR</h2>

<div className="map">
  <img
  src="https://www.bu.edu/wll/files/2016/06/9-stylish-vector-world-map-vector.jpg"
  height={500}
  />
</div>
</Link>
</div>
    <div className="feature"  >
      <Link to="/survival-guide" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h2>SURVIVAL GUIDE</h2>
      </Link>
    </div>

    <div className="feature" >
      <Link to="/community-chat" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h2>COMMUNITY CHAT</h2>
      </Link>
    </div>
    </section>
    
    )}