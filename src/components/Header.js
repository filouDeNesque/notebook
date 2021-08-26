import React from 'react';
import "./Header.css";
import logo from "../assets/Note-Book.png";
// TODO:gerer le css

export default function Header() {
  return (
    <>
    <nav class="header">
    <img class="logo" src={logo} alt="Note-Book"/>
    </nav>
    </>
  );
}
