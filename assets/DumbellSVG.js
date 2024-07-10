import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DumbellSVG = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 53 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.1858 2H9.97948C9.24499 2 8.64957 2.59543 8.64957 3.32992V22.8354C8.64957 23.5699 9.24499 24.1653 9.97948 24.1653H16.1858C16.9202 24.1653 17.5157 23.5699 17.5157 22.8354V3.32992C17.5157 2.59543 16.9202 2 16.1858 2Z"
      fill={props.fill}
      stroke={props.fill}
      strokeWidth={3.32479}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M42.7841 2H36.5778C35.8433 2 35.2479 2.59543 35.2479 3.32992V22.8354C35.2479 23.5699 35.8433 24.1653 36.5778 24.1653H42.7841C43.5187 24.1653 44.114 23.5699 44.114 22.8354V3.32992C44.114 2.59543 43.5187 2 42.7841 2Z"
      fill={props.fill}
      stroke={props.fill}
      strokeWidth={3.32479}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 18.4023V7.76297C2 7.02848 2.59543 6.43305 3.32992 6.43305H7.31966C8.05415 6.43305 8.64958 7.02848 8.64958 7.76297V18.4023C8.64958 19.1369 8.05415 19.7322 7.31966 19.7322H3.32992C2.59543 19.7322 2 19.1369 2 18.4023Z"
      fill={props.fill}
      stroke={props.fill}
      strokeWidth={3.32479}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M50.7636 18.4023V7.76297C50.7636 7.02848 50.1682 6.43305 49.4337 6.43305H45.4439C44.7094 6.43305 44.114 7.02848 44.114 7.76297V18.4023C44.114 19.1369 44.7094 19.7322 45.4439 19.7322H49.4337C50.1682 19.7322 50.7636 19.1369 50.7636 18.4023Z"
      fill={props.fill}
      stroke={props.fill}
      strokeWidth={3.32479}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M17.5157 13.0826H35.2479H17.5157Z" fill={props.fill} />
    <Path
      d="M17.5157 13.0826H35.2479"
      stroke={props.fill}
      strokeWidth={3.32479}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DumbellSVG;
