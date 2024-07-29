import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GArrow(props) {
  return (
    <Svg
      width={9}
      height={16}
      style = {props.style}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.9}
        d="M8.707 8.707a1 1 0 000-1.414L2.343.929A1 1 0 00.93 2.343L6.586 8 .929 13.657a1 1 0 101.414 1.414l6.364-6.364zM7 9h1V7H7v2z"
        fill={props.fill}
      />
    </Svg>
  )
}

export default GArrow
