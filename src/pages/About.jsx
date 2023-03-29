import React from "react";
import { Typography } from "antd";

const { Paragraph, Title } = Typography;

const About = () => {
  return (
    <Typography style={{ textAlign: "left", padding: "0px 50px" }}>
      <Title level={1}>About Us</Title>
      <Paragraph style={{ fontSize: "20px" }}>
        Welcome to Estic, a luxury real estate company dedicated to helping you
        find your dream home in the most desirable locations around India.{" "}
        <br />
        <br />
        At Estic, we understand that buying or selling a property can be a
        daunting experience, which is why we provide personalized and
        professional service to ensure that the process is as seamless as
        possible. Our team of experienced and knowledgeable agents will work
        with you every step of the way to help you achieve your real estate
        goals. <br />
        <br />
        We specialize in luxury properties, including exclusive estates,
        penthouses, and waterfront homes. Our properties are located in some of
        the most sought-after locations around India. <br />
        <br />
        We pride ourselves on our attention to detail and our ability to provide
        a bespoke service that caters to the unique needs of each client.
        Whether you're a first-time homebuyer or a seasoned real estate
        investor, we're here to provide the expertise and guidance you need to
        make informed decisions.
        <br />
        <br />
        At Estic, we're passionate about real estate, and we're dedicated to
        helping our clients achieve their real estate dreams. Contact us today
        to learn more about how we can help you find the perfect luxury
        property.
        <br />
        <br />
      </Paragraph>
    </Typography>
  );
};

export default About;
