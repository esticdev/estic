import { Descriptions } from "antd";
import PropertyGallery from "../../components/Gallery";

const PropertyDetails = (props) => (
  <div style={{ marginTop: "30px", padding: "50px"}}>
    <PropertyGallery />
    <Descriptions
      title="Fort Dallas - Texas"
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
    >
      <Descriptions.Item label="Price">Rs. 7,42,68,600</Descriptions.Item>
      <Descriptions.Item label="Bedrooms">8</Descriptions.Item>
      <Descriptions.Item label="Bathrooms">8</Descriptions.Item>
      <Descriptions.Item label="External Size">800 m²</Descriptions.Item>
      <Descriptions.Item label="Size">603 m²</Descriptions.Item>
      <Descriptions.Item label="Exterior Amenities">
        Courtyard | Gated Entry
      </Descriptions.Item>
      <Descriptions.Item label="Garden">Common</Descriptions.Item>
      <Descriptions.Item label="Reference">4GS79M</Descriptions.Item>
      <Descriptions.Item label="Cooling Systems">
        Ceiling Fan | Air Conditioning
      </Descriptions.Item>
      <Descriptions.Item label="Description">
        Nestled in a peaceful locality surrounded by lush green views, this land
        for sale has a plot size of 800 sqm (approx.) and a built-up area of 600
        sqm (approx.).
        <br />
        <br />
        It is among the most sought-after and prominent locations to own an
        independent bungalow, in Bangalore. The ownership of the property has
        been with the current owners for many decades.
        <br />
        <br />
        This bungalow has eight beautiful bedrooms with ensuite baths, a
        spacious living area, and an open-plan dining area. This villa for sale
        in RMV Stage II is in one of the poshest addresses in Bangalore.
        <br />
        <br />
        With excellent connectivity to the airport, this property for sale is
        close to the best schools, hospitals, malls, and hotels. It is also
        close to high-end markets, covering all lifestyle needs of residents,
        from necessities to ultra-luxury products from brands to quaint Indian
        boutiques, jewellery stores, and stylish restaurants.
        <br />
        <br />
        RMV is home to the city’s most renowned bureaucrats, sportspersons,
        entrepreneurs, lawyers, doctors, and other professionals.
        <br />
        <hr />
        <b>KARNATAKA RERA NO.</b>: PRM/KA/RERA/1251/446/AG/220225/002802
      </Descriptions.Item>
    </Descriptions>
  </div>
);

export default PropertyDetails;
