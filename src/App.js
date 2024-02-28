import { useState } from "react";
import CarRacing from "./pages/CarRacing";
import Header from "./components/Header";
import styles from "./styles/colors";
import handleChangeTheme from "./helpers/changeTheme";
import Footer from "./components/Footer";
import MenuButton from "./components/MenuButton";

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
    <Header themeSelect={themeSelect} menuTheme={true} onClickMenuTheme={()=>{ handleChangeTheme(themeSelect, setThemeSelect); }} />


    <CarRacing color={styles[themeSelect]}/>

    {/* <div style={{marginTop: '8px', textAlign: 'center'}}>
      <MenuButton
        onClick={()=>{ handleChangeTheme(themeSelect, setThemeSelect); }}
        backgroundColor={styles[themeSelect].bg1}
        color={styles[themeSelect].fontColor}
        label={`Theme: ${themeSelect.toUpperCase()}`}
      />
    </div> */}

    
    <Footer />

    </div>
  );
}

export default App;
