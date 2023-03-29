import { Typography, Col, Row } from "antd";
import PropertyCard from "../../components/PropertyCard";
import SelectHouseType from "../../components/SelectHouseType";
import data from "../../redux/data.json";


const style = {
  padding: "8px 0",
};

const { Title } = Typography;

const Porperties = () => {
  return (
    <div style={{ textAlign: "left", margin: "50px" }}>
      <Title level={1}>Properties Showcase</Title>
      <SelectHouseType />
      <Row style={{ marginTop: "20px" }}>
        {data.map((item,index) => {
          return (
            <Col key={index} xs={24} sm={12} md={10} lg={6} className="gutter-row" span={6}>
              <div style={style}>
                <PropertyCard props={item} />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Porperties;
