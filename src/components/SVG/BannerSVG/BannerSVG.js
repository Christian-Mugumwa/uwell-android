import * as React from "react";
import { StyleSheet } from "react-native";
import Svg, {
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from "react-native-svg";

const BannerSVG = () => (
  <Svg
    // width={222}
    // height={222}
    viewBox="0 0 286 322"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={styles.svg}
  >
    <Path
      d="M87.22 187.954c0 5.347-3.311 10.27-8.998 10.27-5.771 0-9.082-4.923-9.082-10.27v-85.299c0-1.782-.509-3.31-2.546-3.31h-17.91c-1.188 0-2.206 1.528-2.206 3.31v86.572c0 16.297 14.684 29.453 31.66 29.453 16.975 0 31.74-13.156 31.74-29.453V102.74c0-1.698-.849-3.395-2.712-3.395h-17.23c-1.783 0-2.717 1.612-2.717 3.395v85.214ZM233.408 102.74c0-1.698-.849-3.395-2.716-3.395h-17.231c-1.697 0-2.631 1.612-2.631 3.395v85.214c0 5.347-3.14 10.27-9.082 10.27-5.941 0-9.082-4.923-9.082-10.27v-85.299c0-1.782-.509-3.31-2.543-3.31h-17.824c-1.273 0-2.292 1.528-2.292 3.31v85.299c0 5.347-3.225 10.27-9.166 10.27-5.602 0-8.913-4.923-8.913-10.27v-85.299c0-1.782-.594-3.31-2.546-3.31h-17.909c-1.273 0-2.207 1.528-2.207 3.31v86.572c0 16.297 11.374 29.453 31.659 29.453 9.677 0 16.806-4.329 21.135-11.119 4.074 6.79 11.031 11.119 20.792 11.119 19.352 0 30.556-13.156 30.556-29.453V102.74Z"
      fill="#fff"
    />
    <Path d="M34.05 141.604h211.848v35.2H34.049v-35.2Z" fill="url(#a)" />
    <Path
      d="M111.682 162.066c0 .482-.296.923-.808.923-.52 0-.819-.441-.819-.923v-7.673c0-.16-.044-.299-.227-.299h-1.613c-.105 0-.197.139-.197.299v7.788c0 1.467 1.321 2.649 2.849 2.649 1.524 0 2.855-1.182 2.855-2.649V154.4c0-.153-.078-.306-.244-.306h-1.552c-.159 0-.244.146-.244.306v7.666ZM132.107 154.4c0-.153-.075-.306-.245-.306h-1.548c-.153 0-.237.146-.237.306v7.666c0 .482-.282.923-.819.923-.533 0-.814-.441-.814-.923v-7.673c0-.16-.048-.299-.231-.299h-1.603c-.115 0-.207.139-.207.299v7.673c0 .482-.289.923-.825.923-.502 0-.801-.441-.801-.923v-7.673c0-.16-.055-.299-.228-.299h-1.612c-.116 0-.197.139-.197.299v7.788c0 1.467 1.022 2.649 2.848 2.649.869 0 1.511-.387 1.902-.999.366.612.991.999 1.87.999 1.739 0 2.747-1.182 2.747-2.649V154.4ZM143.224 162.823v-2.587h2.23c.146 0 .245-.078.245-.261v-1.308c0-.19-.116-.264-.245-.264h-2.23v-2.452h2.794c.139 0 .214-.091.214-.275v-1.297c0-.193-.075-.285-.214-.285h-4.566c-.16 0-.259.116-.259.299v9.982c0 .183.085.288.259.288h4.607c.122 0 .22-.085.22-.268v-1.314c0-.173-.098-.258-.22-.258h-2.835ZM159.671 164.663c.139 0 .214-.091.214-.275v-1.307c0-.183-.075-.258-.214-.258h-2.581v-8.43c0-.183-.074-.299-.251-.299h-1.528c-.166 0-.251.116-.251.299v9.982c0 .183.085.288.258.288h4.353ZM173.27 164.663c.139 0 .214-.091.214-.275v-1.307c0-.183-.075-.258-.214-.258h-2.58v-8.43c0-.183-.075-.299-.252-.299h-1.527c-.167 0-.252.116-.252.299v9.982c0 .183.085.288.258.288h4.353Z"
      fill="#fff"
    />
    <Path
      d="M58.498 142.255h162.965M58.498 175.989h162.965"
      stroke="#fff"
      strokeWidth={2}
    />
    <Path
      d="M4 160.865C4 247.5 66.232 317.73 143 317.73s139-70.23 139-156.865C282 74.231 219.768 4 143 4 66.233 4 4 74.23 4 160.865Z"
      stroke="url(#b)"
      strokeWidth={8}
      strokeMiterlimit={10}
    />
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-226.789 0 0 -3857.8 133.071 161.353)"
      >
        <Stop stopColor="#4959EC" stopOpacity={0} />
        <Stop offset={0.172} stopColor="#545AE9" />
        <Stop offset={0.496} stopColor="#FF31A0" />
        <Stop offset={0.813} stopColor="#4959EC" />
        <Stop offset={1} stopColor="#4959EC" stopOpacity={0} />
      </RadialGradient>
      <LinearGradient
        id="a"
        x1={96.927}
        y1={136.633}
        x2={332.575}
        y2={369.348}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#17145A" />
        <Stop offset={0.479} stopColor="#181C88" />
        <Stop offset={1} stopColor="#171564" />
      </LinearGradient>
    </Defs>
  </Svg>
);
const styles = StyleSheet.create({
  svg: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BannerSVG;
