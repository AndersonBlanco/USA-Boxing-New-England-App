import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function MagnifyingGlassnent(props) {
  return (
    <Svg
      width={11}
      height={11}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

      {...props}
    >
      <Path
        d="M7.75 7.75L10 10M1 4.857a3.857 3.857 0 107.714 0 3.857 3.857 0 00-7.714 0z"
        stroke="rgba(0,0,0, 0.45)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

