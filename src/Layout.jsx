import { Layout } from 'antd';
import Navbar from './components/Navigation';
import PublicRoutes from './routes/PublicRoutes';
import Logo from './components/Logo';

const { Content, Footer } = Layout;

const AppLayout = () => {
  const contentStyle = {
    textAlign: 'left',
    backgroundColor: 'white',
    minHeight:'100vh',
    padding: "50px"
  };
  return (
    <Layout className="layout">
      <Navbar />
      <Content style={contentStyle}>
        <Logo />
        <PublicRoutes />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Estic ©2023
      </Footer>
    </Layout>
  );
};
export default AppLayout;
