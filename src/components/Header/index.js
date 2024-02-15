import React from "react";
import styles from "../../styles/colors";
import IconButton from "../IconButton";
import MoonIcon from "../../SVG/MoonIcon.js";
import SunIcon from "../../SVG/SunIcon.js";

export default function Header({
  themeSelect='dark',
  menuTheme=false,
  onClickMenuTheme=()=>{}
}) {
    return (
      <div 
        style={{
          textAlign: 'center',
          backgroundColor: styles[themeSelect].bg1,
          color: styles[themeSelect].fontColor,
          width: '100vw',
          height: '64px',
          margin: 0,
          padding: 16,
          boxSizing: 'border-box',
          position: "relative"
        }}
      >
        <h1 style={{margin: 0}} >
          Car Racing
        </h1>


       {(menuTheme) && ( <div 
          style={{
            position: "absolute",
            right: 16,
            top: 8
          }}
        >
          <IconButton
            onClick={onClickMenuTheme}
            backgroundColor={styles[themeSelect].bg1}
            color={styles[themeSelect].fontColor}
            label={themeSelect.toUpperCase() === "DARK" ? 
              <MoonIcon size={22} color={styles[themeSelect].fontColor} /> 
              : <SunIcon size={22} color={styles[themeSelect].fontColor} /> 
            }
          />
        </div>)}
      </div>
    )
}