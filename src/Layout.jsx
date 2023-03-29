import { Layout } from 'antd';
import Navbar from './components/Navigation';
import PublicRoutes from './routes/PublicRoutes';
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
