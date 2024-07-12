import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeadshotIcon(props) {
  return (
    <Svg
    width={props.style.height}
    height={props.style.width}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.533 0C6.186 0 4.266 2.24 4.266 5s1.92 5 4.267 5c2.346 0 4.266-2.24 4.266-5s-1.92-5-4.266-5zM4.074 10C1.814 10.1 0 11.84 0 14v2h17.065v-2c0-2.16-1.791-3.9-4.074-4-1.152 1.22-2.73 2-4.458 2-1.728 0-3.307-.78-4.459-2z"
        fill="#000"
      />
    </Svg>
  )
}

export default HeadshotIcon
