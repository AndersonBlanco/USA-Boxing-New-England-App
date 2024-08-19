import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GearIcon(props) {
  return (
    <Svg
    width={props.style.height}
    height={props.style.width}
    
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.79 0l-.967 2.374a2.72 2.72 0 00-.542.26l-2.302-.998-1.393 1.436.967 2.374c-.096.2-.174.36-.251.559L0 7.002v1.996l2.302.997c.077.2.155.36.251.559l-.967 2.374 1.393 1.436 2.302-.997c.174.08.348.18.542.259L6.79 16h1.934l.967-2.374c.175-.08.368-.16.542-.26l2.302.998 1.393-1.436-.967-2.374c.077-.18.174-.38.251-.559l2.302-.997V7.002l-2.302-.997a3.56 3.56 0 00-.251-.559l.967-2.374-1.393-1.436-2.302.997c-.174-.08-.367-.18-.542-.259L8.724 0H6.79zm.967 4.988c1.606 0 2.902 1.336 2.902 2.992s-1.296 2.993-2.902 2.993S4.855 9.636 4.855 7.98s1.296-2.992 2.902-2.992z"
        fill={props.fill}
        stroke={"black"}
        strokeWidth={1}
      />
    </Svg>
  )
}

export default GearIcon
