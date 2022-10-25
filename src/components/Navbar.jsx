import React from "react";
import me from "../imgs/a.jpg";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="menu-brand">
        <div class="portrait-image"></div>
      </div>
      <ul class="menu-navigation">
        <li class="navigation-item current">
          <a href="#header" class="navigation-link">
            Home
          </a>
        </li>
        <li class="navigation-item">
          <a href="#about" class="navigation-link">
            About me
          </a>
        </li>
        <li class="navigation-item">
          <a href="#projects" class="navigation-link">
            Projects
          </a>
        </li>
        <li class="navigation-item">
          <a href="#contact" class="navigation-link">
            Contact info
          </a>
        </li>
      </ul>
      <div class="icons">
        <a href="https://www.instagram.com/byryss/">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://t.me/Byryss">
          <i class="fab fa-telegram fa-2x"></i>
        </a>
        <a href="https://github.com/Pyry-Santahuhta">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a href="https://steamcommunity.com/profiles/76561198096114592">
          <i class="fab fa-steam fa-2x"></i>
        </a>
      </div>
    </nav>
  );
}
