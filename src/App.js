import { useState } from "react";
import CarRacing from "./pages/CarRacing";
import Header from "./components/Header";
import styles from "./styles/colors";
import handleChangeTheme from "./helpers/changeTheme";
import Footer from "./components/Footer";

function App() {
  const [themeSelect, setThemeSelect] = useState('dark');
  return (
    <div
      style={{
        backgroundColor: styles[themeSelect].bg3,
        color: styles[themeSelect].fontColor,
        height: '100vh',
      }}
    >
    <Header themeSelect={themeSelect} />

    <CarRacing />

    <div style={{marginTop: '8px', textAlign: 'center'}}>
          <button 
            onClick={()=>{ handleChangeTheme(themeSelect, setThemeSelect); }}
            style={{ 
              width: '75vw', 
              height: '45px', 
              maxWidth: '500px',
              borderRadius: '5px',
              backgroundColor: styles[themeSelect].bg1,
              color: styles[themeSelect].fontColor,
            }}
          >
            Theme: {themeSelect.toUpperCase()}
          </button>
        </div>

    <div
      style={{
        position: "absolute", 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        textAlign: "center"
      }}
    >
      <Footer />
    </div>

    </div>
  );
}

export default App;
