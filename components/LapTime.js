import { StyleSheet, Text, View } from "react-native";

export default function LapTime(props) {
  const index = props.index;
  const time = props.time;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{index}</Text>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 10,
    paddingBottom: 10,
    borderWidth: 0.5,
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
  },

  text: {
    color: "#fff",
    fontSize: 18,
  },
});
