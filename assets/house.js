import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HouseIcon(props) {
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
        d="M8.533 0L0 6.857h2.133V16H6.4v-4.571h4.266V16h4.266V6.789l2.133.068L8.533 0z"
        fill={props.fill}
        stroke={"black"}
        strokeWidth={1}
      />
    </Svg>
  )
}

export default HouseIcon
