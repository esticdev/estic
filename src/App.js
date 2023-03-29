import './App.css';
import { ConfigProvider } from 'antd';
import AppLayout from "./Layout";

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
        <AppLayout />
      </div>
    </ConfigProvider>
  );
}

export default App;
