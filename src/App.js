import './App.css';
import Navbar from './components/Navigation';
import { ConfigProvider } from 'antd';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily:'Playfair Display',
        },
      }}
    >
      <div className="App">
        <Navbar />
        <PublicRoutes />
      </div>
    </ConfigProvider>
  );
}

export default App;
