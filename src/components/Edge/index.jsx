import React from "react";

export default function Edge({
  color, 
  side='left',
  size=29,
}) {
  const position = {
    x: {
      left: '0.5',
      right: '330.5',
    }
  }
    return (
      <g id={`${side}Edge`}>
        <rect id={`${side}Wall01`} x={position.x[side]} y="570.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall02`} x={position.x[side]} y="540.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall03`} x={position.x[side]} y="510.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall04`} x={position.x[side]} y="480.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall05`} x={position.x[side]} y="450.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall06`} x={position.x[side]} y="420.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall07`} x={position.x[side]} y="390.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall08`} x={position.x[side]} y="360.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall09`} x={position.x[side]} y="330.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall10`} x={position.x[side]} y="300.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall11`} x={position.x[side]} y="270.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall12`} x={position.x[side]} y="240.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall13`} x={position.x[side]} y="210.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall14`} x={position.x[side]} y="180.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall15`} x={position.x[side]} y="150.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall16`} x={position.x[side]} y="120.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall17`} x={position.x[side]} y="90.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall18`} x={position.x[side]} y="60.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall19`} x={position.x[side]} y="30.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
        <rect id={`${side}Wall20`} x={position.x[side]} y="0.5" width={size} height={size} fill={color.fontColor} stroke={color.bg1}/>
      </g>
    );
}