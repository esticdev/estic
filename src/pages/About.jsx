import React from "react";
import { Typography } from "antd";

const { Paragraph, Title } = Typography;

const About = () => {
  return (
    <>      
      <Typography>
        <Title level={1}>About Us</Title>
        <Paragraph style={{ fontSize: "20px" }}>
          Welcome to our real estate website! I'm Anish Kumar, the founder of this platform.
          <br />
          <br />
          As a real estate enthusiast and professional with experience in the industry, I understand how overwhelming and complex the process of buying and selling a property can be. That's why I wanted to create a platform that simplifies this process and empowers people with the knowledge and tools they need to make informed decisions.
          <br />
          <br />
          Our website provides a comprehensive database of properties across India, making it easy for you to search, compare and find the perfect property for your needs. Whether you're looking for a cozy apartment in the city or a spacious villa in the countryside, we have something for everyone.
          <br />
          <br />
          We believe in transparency, integrity and customer satisfaction, which is why we prioritize the needs and preferences of our clients above everything else. Our team of dedicated professionals is always available to assist you with any queries, concerns or doubts you may have, and to guide you through the entire process.
          <br />
          <br />
          At our real estate website, we strive to provide the best possible experience for all our clients, whether you're a first-time buyer, an experienced investor or a seasoned seller. We value your time, your trust and your business, and we look forward to helping you achieve your real estate goals.
          <br />
          <br />
          <br />
        </Paragraph>
      </Typography>
    </>
  );
};

export default About;
