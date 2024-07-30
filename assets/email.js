import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EmailIcon(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm0 0v1.5a2.5 2.5 0 002.5 2.5v0a2.5 2.5 0 002.5-2.5V12a9 9 0 10-9 9h4"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default EmailIcon
