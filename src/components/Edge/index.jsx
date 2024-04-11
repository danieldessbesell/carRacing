import React from "react";

export default function Edge({
  color, 
  side='left',
  size=29,
  wallFail = 0
}) {
  const position = {
    x: {
      left: '0.5',
      right: '330.5',
    },
    y: { 
      startPosition: 570.5,
      factor: '30'
    }
  }

  const walls = [];
  for (let i = 0; i < 20; i++) {
    walls.push(i + 1); 
  }

    return (
      <g id={`${side}Edge`}>
        {walls.map((item, index)=>(
          <rect 
          id={`${side}Wall${item < 10 ? (`0${item}`) : item}`} 
          x={position.x[side]} 
          y={position.y.startPosition - (position.y.factor * index)} 
          width={size} height={size} 
          fill={item === wallFail ? 'transparent' : color.fontColor} 
          stroke={color.bg1}/> 
        ))}
      </g>
    );
}