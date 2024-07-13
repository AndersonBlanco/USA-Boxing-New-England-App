import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export default function ExclamationIcon(props) {
  return (
    <Svg
      height={props.style.height}
      width={props.style.width}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_151_2)">
        <Path
          d="M30 17.5h2.5V35H30V17.5zm3.75 23.75a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm23.25-10A25.75 25.75 0 1131.25 5.5 25.743 25.743 0 0157 31.25zm-2.5 0A23.25 23.25 0 1031.25 54.5 23.275 23.275 0 0054.5 31.25z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_151_2">
          <Path fill="#fff" d="M0 0H60V60H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

