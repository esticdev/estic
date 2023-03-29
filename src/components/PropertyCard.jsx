import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const PropertyCard = (props) => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    let path = `/properties/details`;
    navigate(path);
  };

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt={props.props.img.alt} src={props.props.img.src} />}
      actions={[
        `${props.props.price}`,
        <ArrowRightOutlined onClick={handleNavigate} key="more" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={props.props.meta.avatar} />}
        title={props.props.meta.title}
        description={props.props.meta.desc}
      />
    </Card>
  );
};

export default PropertyCard;
