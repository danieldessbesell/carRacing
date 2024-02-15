import React from "react";

export default function MenuButton({
  label="Button",
  backgroundColor="#000000",
  color="#FFFFFF",
  onClick=() => {}
}) {
  return (
    <button 
      onClick={onClick}
      style={{ 
        width: '75vw', 
        height: '45px', 
        maxWidth: '500px',
        borderRadius: '5px',
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      {label}
    </button>
  )
}