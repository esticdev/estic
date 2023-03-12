import './App.css';
import Hero from "./pages/Home/components/Hero"
import About from "./pages/Home/components/About"
import Navbar from './components/Navigation';
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
        <Navbar />
        <Hero id="home" />
        <About id="about" />
      </div>
    </ConfigProvider>
  );
}

export default App;
