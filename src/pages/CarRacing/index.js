import React, { useEffect, useState } from "react";
import ClassicCar from "../../components/ClassicCar";

export default function CarRacing({color}) {
  const [carControl, setCarControl] = useState({
    x: 235
  });
  const isMobile = window.matchMedia('(max-width: 700px)').matches;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowLeft':
        carMovement('left');
        break;
      case 'ArrowRight':
        carMovement('right');
        break;
      default:
        break;
    }
  };

  function carMovement(type) {
    const trackLenght = 360;
    const carLenght = 87;
    const moveFactor = 100;
    if (type === 'left') {
      setCarControl({
        x: (((carControl?.x - moveFactor < 34) ? (35 + moveFactor) : carControl?.x) - moveFactor), 
      });
    } else if (type === 'right') {
      setCarControl({
        x: ((((trackLenght - 30) - carLenght ) > (carControl?.x + moveFactor)) ? 
        (carControl?.x + moveFactor) : carControl?.x), 
      });
    } 
  }

  
  useEffect(()=>{
    setCarControl({
      x: 235
    });
  },[]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
 
    // Limpar o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
 
  return (
    <div
      style={{
        boxSizing: 'border-box',
        textAlign: 'center'
      }}
    >
      {/* <h2>TO-DO</h2>
      <hr />
      <li>criar movimentação da pista</li>
      <li>criar "boots"</li>
      <li>criar impacto</li>
      <li>manipulação de velocidade conforme passa de fase</li> */}
      <svg 
        // width="auto" 
        // height="100%" 
        viewBox="0 0 360 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '450px'
        }}
      >
        <g id="ClassicMode">
          <rect id="background" width="360" height="600" fill={color.bg1}/>
          <g id="EdgeLeft">
            <rect id="wall01" x="0.5" y="570.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall02" x="0.5" y="540.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall03" x="0.5" y="510.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall04" x="0.5" y="480.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall05" x="0.5" y="450.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall06" x="0.5" y="420.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall07" x="0.5" y="390.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall08" x="0.5" y="360.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall09" x="0.5" y="330.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall10" x="0.5" y="300.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall11" x="0.5" y="270.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall12" x="0.5" y="240.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall13" x="0.5" y="210.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall14" x="0.5" y="180.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall15" x="0.5" y="150.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall16" x="0.5" y="120.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall17" x="0.5" y="90.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall18" x="0.5" y="60.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall19" x="0.5" y="30.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall20" x="0.5" y="0.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
          </g>
          <g id="EdgeRight">
            <rect id="wall01_2" x="330.5" y="570.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall02_2" x="330.5" y="540.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall03_2" x="330.5" y="510.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall04_2" x="330.5" y="480.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall05_2" x="330.5" y="450.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall06_2" x="330.5" y="420.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall07_2" x="330.5" y="390.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall08_2" x="330.5" y="360.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall09_2" x="330.5" y="330.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall10_2" x="330.5" y="300.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall11_2" x="330.5" y="270.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall12_2" x="330.5" y="240.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall13_2" x="330.5" y="210.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall14_2" x="330.5" y="180.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall15_2" x="330.5" y="150.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall16_2" x="330.5" y="120.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall17_2" x="330.5" y="90.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall18_2" x="330.5" y="60.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall19_2" x="330.5" y="30.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
            <rect id="wall20_2" x="330.5" y="0.5" width="29" height="29" fill={color.fontColor} stroke={color.bg1}/>
          </g>
          <ClassicCar
            x={carControl?.x}
            fill={color.fontColor}
            stroke={color.bg1}
           />
        </g>
      </svg>
      <div style={{marginTop: -5}}>
        <button
          onClick={()=> { carMovement('left'); }}
          style={{
            width: isMobile ? '50%' : '225px',
            height: '50px',
            backgroundColor: color.bg1,
            color: color.fontColor
          }}
        >
          {'<'}
        </button>
        <button
          onClick={()=> { carMovement('right'); }}
          style={{
            width: isMobile ? '50%' : '225px',
            height: '50px',
            backgroundColor: color.bg1,
            color: color.fontColor
          }}
        >
          {'>'}
        </button>
      </div>

      

      
    </div>

  )
}