import { Anchor } from 'antd';
import Logo from './Logo';


const Navbar = () => (
    <>
        <div
            style={{
                padding: '20px'
            }}
        >
            <Logo />
            <Anchor
                style={{float:'right'}}
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