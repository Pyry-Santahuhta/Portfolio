import React from "react";
import me from "../../imgs/a.jpg";
export default function Header() {
  return (
    <div id="header">
      <h1>Pyry Santahuhta</h1>
      <h2 class="small-heading">CS Student, Tech Enthusiast & Hurdler</h2>
      <img class="portrait" alt="Pic of me" src={me}></img>
    </div>
  );
}
