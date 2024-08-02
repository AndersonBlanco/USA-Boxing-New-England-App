import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function NotificationsSVG(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
     strokeWidth={1.5}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path fill="#fff" d="M0 0H24V24H0z"/>
        <Path
          d="M9.5 19H5.617a1 1 0 01-.893-1.447l.854-1.708A3.997 3.997 0 006 14.056V11c0-2 1-6 6-6s6 4 6 6v3.056c0 .621.145 1.233.422 1.789l.854 1.708A1 1 0 0118.382 19H14.5m-5 0c0 2 1 3 2.5 3s2.5-1 2.5-3m-5 0h5"
          stroke="#000"
          strokeLinejoin="round"
        />
        <Path
          d="M12 5V3"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NotificationsSVG
