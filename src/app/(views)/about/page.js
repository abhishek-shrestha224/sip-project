import React from "react";
import { FaUsers, FaEye, FaHeart, FaHandshake } from "react-icons/fa";

function About() {
  return (
    <section className="AboutPage">
      <div className="_Banner">
        <div className="Shape"></div>
        <h2>About Us</h2>
      </div>

      <p>
        Welcome to Artopedia, a platform dedicated to enriching the lives of
        disabled individuals through the beauty and power of art. We believe
        that everyone deserves equal access to artistic expression and cultural
        experiences, regardless of their abilities.
      </p>
      <div className="_Banner">
        <div className="Shape"></div>
        <h2>Who Are We?</h2>
      </div>
      <figure>
        <img src="/img/team.jpg" alt="Image of team memebers" />
      </figure>
      <p>
        We are Underwaters BCS 4th Sem. We are committed to creating an
        inclusive space where people of all abilities can explore, engage with,
        and appreciate art. Our team comprises individuals with diverse
        backgrounds and experiences, united by our shared belief in the
        transformative power of art.
      </p>
      <div className="_Banner">
        <div className="Shape"></div>
        <h2>Our Vision:</h2>
      </div>
      <p>
        Our vision is to create a world where art is truly accessible to all. We
        envision a society where disability is not a barrier to experiencing the
        joy, inspiration, and creativity that art has to offer. Through our
        efforts, we strive to:
      </p>
      <ul className="Vision">
        <li>
          <FaEye /> <p>Promote Inclusivity</p>
        </li>
        <li>
          <FaUsers />
          <p> Celebrate Diversity</p>
        </li>
        <li>
          <FaHeart />
          <p>Empower Through Art</p>
        </li>
        <li>
          <FaHandshake /> <p>Drive Social Change </p>
        </li>
      </ul>

      <div className="_Banner">
        <div className="Shape"></div>
        <h2>It Is Possible</h2>
      </div>
      <p>
        Join us on our journey to make art accessible to everyone! Whether
        you&apos;re an artist, a supporter, or someone passionate about social
        innovation, there are many ways to get involved and make a difference.
        Together, we can create a more inclusive and inspiring world through
        art.
      </p>
    </section>
  );
}

export default About;
