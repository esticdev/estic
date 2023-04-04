import { Typography, Col, Row } from "antd";
import PropertyCard from "../../components/PropertyCard";
// import SelectHouseType from "../../components/SelectHouseType";
import data from "../../redux/data.json";

const { Title } = Typography;

const Porperties = () => {
  return (
    <div
      style={{
        backgroundColor: "#231F20",
        padding: "50px",
      }}
    >
      <Title style={{color:"#EAEAEA"}} level={1}>Properties Showcase</Title>
      {/* <SelectHouseType /> */}
      <Row>
        {data.map((item) => {
          return (
            <Col
              style={{marginTop:"20px"}}
              key={item.id}
              xs={24}
              sm={12}
              md={10}
              lg={6}
              className="gutter-row"
              span={6}
            >
              <div>
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
