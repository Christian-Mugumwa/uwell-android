import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const { width } = Dimensions.get("window");

const OfflineNotice = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener(handleConnectivityChange);
    // clean up
    return () => {
      handleConnectivityChange;
    };
  }, []);

  const handleConnectivityChange = (state) => {
    setIsConnected(state.isConnected);
  };

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b52424",
    height: 30,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width,
    position: "absolute",
    top: 30,
    zIndex: 220,
  },
  text: {
    color: "#fff",
  },
});

export default OfflineNotice;
