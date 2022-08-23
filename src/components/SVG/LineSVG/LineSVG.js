import * as React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const LineSVG = () => (
  <Svg
    width={"100%"}
    height={2}
    style={styles.svg}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M377 2H0v-4h377v4Z"
      fill="url(#a)"
      mask="url(#path-1-inside-1_107_90)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={5.5}
        y1={0}
        x2={377}
        y2={0.001}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00F0FF" />
        <Stop offset={1} stopColor="#FF1CF7" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const styles = StyleSheet.create({
  svg: {
    position: "absolute",
    bottom: 0,
  },
});

export default LineSVG;
