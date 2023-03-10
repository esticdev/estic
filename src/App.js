import './App.css';
import Home from "./pages/Home"
import { ConfigProvider } from 'antd';

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
        <Home />
      </div>
    </ConfigProvider>
  );
}

export default App;
