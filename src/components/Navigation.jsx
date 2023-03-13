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
                    }
                ]}
            />
        </div>
    </>
);
export default Navbar;