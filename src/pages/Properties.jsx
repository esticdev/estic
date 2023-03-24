import { ArrowRightOutlined } from '@ant-design/icons';
import { Avatar, Card, Typography, Col, Row } from 'antd';
import SelectHouseType from '../components/SelectHouseType';
import data from "../redux/data.json";

const { Meta } = Card;
const style = {
    padding: '8px 0',
};

const { Title } = Typography;

const ImagesCarousel = () => {
    return (
        <div style={{ textAlign: 'left', margin: "50px" }}>
            <Title level={1}>Properties Showcase</Title>
            <SelectHouseType />
            <Row
                style={{ marginTop: "20px" }}
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                {data.map((item) => {
                    return (
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Card
                                    style={{
                                        width: 300,
                                    }}
                                    cover={
                                        <img
                                            alt={item.img.alt}
                                            src={item.img.src}
                                        />
                                    }
                                    actions={[
                                        `${item.price}`,
                                        <ArrowRightOutlined key="more" />
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src={item.meta.avatar} />}
                                        title={item.meta.title}
                                        description={item.meta.desc}
                                    />
                                </Card>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
};
export default ImagesCarousel;