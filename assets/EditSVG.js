import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EditSVG(props) {
  return (
    <Svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-2 14l-3 1 1-3 7-7 2 2z" />
    </Svg>
  )
}

export default EditSVG
