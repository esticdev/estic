import { Layout } from 'antd';
import Image from "../../../img.jpeg";
import "./Hero.css"

const { Header, Content, Footer } = Layout;

const Hero = () => {
    return (
        <Layout style={{ background: 'white' }}>
            <Header
                style={{
                    background: 'transparent',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div
                    style={{
                        float: 'left',
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',
                    }}
                >
                    <img style={{ width: '100%' }} alt="logo" src={Image} />
                </div>
                <div
                    style={{
                        float: 'right'
                    }}
                ></div>
            </Header>
            <Content style={{ padding: '0px 50px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontFamily: 'Playfair Display', fontSize: '60px', float: 'left' }}>Discover a place you'll love to live</p>
                </div>
                <img style={{ width: '100%' }} alt='luxury real estate' src='https://imgs.search.brave.com/HY8ZyYnAEDLBTVIg6D_x3t9FD6m-YnDMHODpazoS7QM/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9sdXhw/b3J0LnMzLmFtYXpv/bmF3cy5jb20vMTAy/MDYvM0YyRjkxODkt/Q0M5NC00QjMxLUIx/RTEtQUIyRkI0QzMx/OUEwJTJCQUIyRkI0/QzMxOUEwXzAxMF9I/LmpwZw' />
            </Content>
            <Footer
                style={{
                    background: 'transparent',
                    textAlign: 'center',
                }}
            >
            </Footer>
        </Layout >
    );
};
export default Hero;