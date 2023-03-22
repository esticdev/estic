import { Carousel, Typography } from 'antd';

const { Title } = Typography;
const contentStyle = {
    margin: 0,
    textAlign: 'center',
};
const ImagesCarousel = () => {
    return (
        <div style={{ textAlign: 'left' }}>
            <Title style={{ marginLeft: '50px' }} level={1}>Properties Showcase</Title>
            <Carousel autoplay style={{ margin: "50px" }}>
                <div>
                    <h3 style={contentStyle}>
                        <img 
                            style={{ width: '100%', height: '100%' }} 
                            alt="logo" 
                            src="https://imgs.search.brave.com/W2hEXK-H2pwAFvrEf6eQK1gAMfRGHStge13y0fP5NhQ/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9sdXhw/b3J0LnMzLmFtYXpv/bmF3cy5jb20vMTAy/MDYvM0YyRjkxODkt/Q0M5NC00QjMxLUIx/RTEtQUIyRkI0QzMx/OUEwJTJCQUIyRkI0/QzMxOUEwXzAwNF9I/LmpwZw" 
                        />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img 
                            style={{ width: '100%', height: '100%' }} 
                            alt="logo" 
                            src="https://imgs.search.brave.com/I-Y1m95_1usMdVE2Z9guv4yl6EWJtxqoNoUTkbx74wo/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9sdXhw/b3J0LWRldi5zMy5h/bWF6b25hd3MuY29t/LzExOTExMi9tb3Vu/dGFpbi1tb2Rlcm4t/YWVzdGhldGljLWNv/bXBsZXRlbHktcmVt/b2RlbGVkLWNjMTg3/YWQyLWQtMS1FWFQu/anBn" 
                        />
                    </h3>
                </div>
            </Carousel>
        </div>
    );
};
export default ImagesCarousel;