import React, { useEffect, useState } from "react";
import ClassicCar from "../../components/ClassicCar";
import Edge from "../../components/Edge";
import PlayIcon from "../../SVG/PlayIcon";
import PauseIcon from "../../SVG/PauseIcon";

export default function CarRacing({color}) {
  const [carControl, setCarControl] = useState({
    x: 235
  });
  const [trackControl, setTrackControl] = useState({
    type: 0,
    speed: 1,
    wallFrame: 0,
  })
  const [gameControl, setGameControl] = useState({
    play: false
  });
  const isMobile = window.matchMedia('(max-width: 700px)').matches;

  const numberOfSquares = 20;

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
        ...carControl,
        x: (((carControl?.x - moveFactor < 34) ? (35 + moveFactor) : carControl?.x) - moveFactor), 
      });
    } else if (type === 'right') {
      setCarControl({
        ...carControl,
        x: ((((trackLenght - 30) - carLenght ) > (carControl?.x + moveFactor)) ? 
        (carControl?.x + moveFactor) : carControl?.x), 
      });
    } 
  }

  useEffect(()=>{
    setCarControl({
      ...carControl,
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

  useEffect(()=>{
    const speedGame = setInterval(() => {
       if (gameControl.play) {
        setTrackControl({
          ...trackControl,
          wallFrame: (trackControl.wallFrame > 0 ? trackControl.wallFrame - 1 : 20 )
        })        
       }
    }, 50);

    return () => {
      clearInterval(speedGame);
    };
  },[gameControl,trackControl])
 
  return (
    <div
      style={{
        boxSizing: 'border-box',
        textAlign: 'center',
        position: "relative"
      }}
    >
      {/* <h2>TO-DO</h2>
      <hr />
      <li>Status do Jogo</li>
      <li>Menu Start e Pause</li>
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
          
          <Edge color={color} wallFail={trackControl.wallFrame} side="left" />
          <Edge color={color} wallFail={trackControl.wallFrame} side="right" />

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

      {(!gameControl.play) && (
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '40%'
          }}
        >
          <button
            onClick={()=> setGameControl({...gameControl, play: true})}
            style={{
              backgroundColor: 'transparent'
            }}
          >
            <PlayIcon color={color.fontColor} size={100}/>
          </button>
        </div>
      )}
      {(gameControl.play) && (
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '40%'
          }}
        >
          <button
            onClick={()=> setGameControl({...gameControl, play: false})}
            style={{
              backgroundColor: 'transparent'
            }}
          >
            <PauseIcon color={color.fontColor} size={100}/>
          </button>
        </div>
      )}

      
    </div>

  )
}