import React from "react";

export default function ClassicCar({
  x=200,
  y=400,
  fill="#FFFFFF",
  stroke="#000000"
}) {
  return (
    <g id="classicCar">
      <g id="carWheels">
        <rect id="carWheelBackLeft" x={x+0.5} y={y+140.5} width="29" height="29" fill={fill} stroke={stroke} />
        <rect id="carWheelBackRight" x={x+60.5} y={y+140.5} width="29" height="29" fill={fill} stroke={stroke} />
        <rect id="carWheelFrontLeft" x={x+0.5} y={y+80.5} width="29" height="29" fill={fill} stroke={stroke} />
        <rect id="carWheelFrontRight" x={x+60.5} y={y+80.5} width="29" height="29" fill={fill} stroke={stroke} />
      </g>
      <g id="carBody">
        <rect id="carBody4" x={x+30.5} y={y+50.5} width="29" height="29" fill={fill} stroke={stroke} />
        <rect id="carBody3" x={x+30.5} y={y+80.5} width="29" height="29" fill={fill} stroke={stroke} />
        <rect id="carBody2" x={x+30.5} y={y+110.5} width="29" height="29" fill={fill} stroke={stroke} />
        <rect id="carBody1" x={x+30.5} y={y+140.5} width="29" height="29" fill={fill} stroke={stroke} />
      </g>
    </g>
  )
}