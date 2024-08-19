import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CalendarIcon(props) {
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
        d="M.022 0v4h15.492V0H.022zm0 6v9.82c0 .1.089.18.2.18h15.07c.111 0 .2-.08.2-.18V6H0h.022zm2.213 2h2.213v2H2.235V8zm4.427 0h2.213v2H6.662V8zm4.426 0H13.3v2h-2.213V8zm-8.853 4h2.213v2H2.235v-2zm4.427 0h2.213v2H6.662v-2z"
        fill={props.fill}
        stroke={"black"}
        strokeWidth={1}
      />
    </Svg>
  )
}

export default CalendarIcon
