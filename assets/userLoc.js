import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function UserLoc(props) {
  return (
    <Svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G data-name="Layer 2">
        <Path fill="none" data-name="invisible box" d="M0 0H48V48H0z" />
        <Path
          d="M24 2C14.1 2 7 10.1 7 20s11.5 21.3 15.6 25.4a1.9 1.9 0 002.8 0C29.5 41.3 41 30.1 41 20S33.9 2 24 2zm0 39.2a96.5 96.5 0 01-6.7-7.6 14.8 14.8 0 0113.4 0 96.5 96.5 0 01-6.7 7.6zM23.8 24a7 7 0 117-7 7 7 0 01-7 7z"
          data-name="icons Q2"
        />
      </G>
    </Svg>
  )
}

export default UserLoc
