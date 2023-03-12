import { Anchor } from 'antd';

const Navbar = () => (
    <>
        <div
            style={{
                padding: '20px',
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
                    }
                ]}
            />
        </div>
    </>
);
export default Navbar;