import { Anchor } from 'antd';

const Navbar = () => (
    <>
        <div
            style={{
                padding: '20px',
                backgroundColor:'white'
            }}
        >
            <Anchor
                direction="horizontal"
                items={[
                    {
                        key: 'home',
                        href: '/',
                        title: 'HOME',
                    },
                    {
                        key: 'about',
                        href: '/about',
                        title: 'ABOUT',
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