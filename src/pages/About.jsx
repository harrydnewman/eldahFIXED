import React from "react";
import BunnaImage from "../assets/images/bunna.jpeg"; // Importing images
import '../styles/styles.css'
function About() {
  return (
    <div className="container">
      <div className="content">
        <h1>about this site</h1>
        <p className="intro">
          my parents emigrated from Ethiopia in 1998, and I consider myself to
          have dual cultures—Ethiopian and American. one of my favorite
          traditions is the ceremonial coffee, known as "bunna."
        </p>

        <p>
          the image here shows a non-traditional coffee setup, but it was taken
          in one of Addis Ababa’s vibrant cafes that hold special memories for
          me. for me, a life without coffee, both literally and symbolically, is
          not one I want.
        </p>
        <img src={BunnaImage} width="300px" alt="Ethiopian coffee" />
        <p>
          <a href="/">go back</a>
        </p>
      </div>

      <footer className="footer">made in 2024</footer>
    </div>
  );
}

export default About;