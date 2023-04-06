import React from "react";
import { Typography } from "antd";
import "../assets/css/about.css";

const { Paragraph, Title } = Typography;

const About = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          className="hero-image"
          src="https://imgs.search.brave.com/HY8ZyYnAEDLBTVIg6D_x3t9FD6m-YnDMHODpazoS7QM/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9sdXhw/b3J0LnMzLmFtYXpv/bmF3cy5jb20vMTAy/MDYvM0YyRjkxODkt/Q0M5NC00QjMxLUIx/RTEtQUIyRkI0QzMx/OUEwJTJCQUIyRkI0/QzMxOUEwXzAxMF9I/LmpwZw"
          alt="hero-img"
          style={{ width: "100%" }}
        />
        <Typography
          style={{
            position: "absolute",
            height: "100%",
            top: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
          }}
        >
          <Title
            className="about-text"
            style={{ color: "white", fontSize: "50px" }}
          >
            About Us
          </Title>
          <Paragraph
            className="about-text"
            style={{ color: "white", fontSize: "20px" }}
          >
            Welcome to our real estate website! I'm Anish Kumar, the founder of
            this platform.
            <br />
            <br />
            As a real estate enthusiast and professional with experience in the
            industry, I understand how overwhelming and complex the process of
            buying and selling a property can be. That's why I wanted to create
            a platform that simplifies this process and empowers people with the
            knowledge and tools they need to make informed decisions.
            <br />
            <br />
            Our website provides a comprehensive database of properties across
            India, making it easy for you to search, compare and find the
            perfect property for your needs. Whether you're looking for a cozy
            apartment in the city or a spacious villa in the countryside, we
            have something for everyone.
            <br />
            <br />
            We believe in transparency, integrity and customer satisfaction,
            which is why we prioritize the needs and preferences of our clients
            above everything else. Our team of dedicated professionals is always
            available to assist you with any queries, concerns or doubts you may
            have, and to guide you through the entire process.
            <br />
            <br />
            At our real estate website, we strive to provide the best possible
            experience for all our clients, whether you're a first-time buyer,
            an experienced investor or a seasoned seller. We value your time,
            your trust and your business, and we look forward to helping you
            achieve your real estate goals.
            <br />
            <br />
            <br />
          </Paragraph>
        </Typography>
      </div>
    </>
  );
};

export default About;
