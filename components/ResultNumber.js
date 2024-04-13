import { StyleSheet, Text, View } from "react-native";

export default function ResultNumber(props) {
  return (
    <View>
      <Text style={styles.number}>{props.number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  number: {
    fontSize: 78,
    color: "#fff",
    fontWeight: "200",
  },
});
