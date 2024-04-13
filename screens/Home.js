import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ResultNumber from "../components/ResultNumber";
import Button from "../components/Button";
import LapTime from "../components/LapTime";

export default function Home() {
  const handleLapPress = () => {
    console.log("lap");
  };

  const handleResetPress = () => {
    console.log("reset");
  };

  const handleStartPress = () => {
    console.log("start");
  };

  const handleStopPress = () => {
    console.log("stop");
  };

  const defaultLapTimes = [
    "00:01,59",
    "00:02,59",
    "00:03,59",
    "00:01,59",
    "00:02,59",
    "00:03,59",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <ResultNumber number="00:03.42" />
      </View>

      <View style={styles.groupButton}>
        <View>
          <Button text="Lap" onPress={handleLapPress} />
          <Button text="Reset" onPress={handleResetPress} />
        </View>
        <View>
          <Button text="Start" style="green" onPress={handleStartPress} />
          <Button text="Stop" style="red" onPress={handleStopPress} />
        </View>
      </View>

      <ScrollView style={styles.lapTime}>
        {defaultLapTimes.map((time, index) => (
          <LapTime index={index + 1} time={time} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
  },
  result: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  groupButton: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 40,
  },

  lapTime: {
    flex: 1,
  },
});