import { Anchor } from 'antd';
import Logo from './Logo';
import "../assets/css/anchor.css";

const Navbar = () => (
    <>
        <div
            style={{
                padding: '20px'
            }}
        >
            <Logo />
            <Anchor
                style={{display:"inline-block"}}
                direction="horizontal"
                items={[
                    {
                        key: 'home',
                        href: '/',
                        title: 'HOME',
                    },
                    {
                        key: 'properties',
                        href: '/properties',
                        title: 'PROPERTIES',
                    },
                    {
                        key: 'contact-us',
                        href: '/contact-us',
                        title: 'CONTACT US',
                    }
                ]}
            />
        </div>
    </>
);
export default Navbar;