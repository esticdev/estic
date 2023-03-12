import { Layout, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Image from "../../../img.jpeg";
import SelectHouseType from '../../../components/SelectHouseType';
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
                    <p style={{ fontFamily: 'Playfair Display', fontSize: '60px', float: 'left' }}>Discover a place<br /> you'll love to live</p>
                    <div id="searchHouse" style={{ display: 'flex', justifyContent: 'center', width: '60%' }}>
                        <SelectHouseType />
                    </div>
                    <Button id="searchIcon" style={{ background: 'transparent' }} shape="circle" icon={<SearchOutlined />} />
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