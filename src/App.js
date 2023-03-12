import './App.css';
import Hero from "./pages/Home/components/Hero"
import About from "./pages/Home/components/About"
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
        <Hero />
        <About />
      </div>
    </ConfigProvider>
  );
}

export default App;
