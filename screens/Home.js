import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ResultNumber from "../components/ResultNumber";
import Button from "../components/Button";
import LapTime from "../components/LapTime";
import { useState } from "react";

export default function Home() {
  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [lapTime, setLapTime] = useState([]);

  // vars
  const showLapButton = !(isRunning && isPause);
  const showResetButton = isRunning && isPause;
  const showStartButton = !isRunning || (isRunning && isPause);
  const showStopButton = isRunning && !isPause;

  const handleLapPress = () => {
    setLapTime((state) => {
      state.unshift("state");
    });
  };

  const handleResetPress = () => {
    setIsPause(false);
    setIsRunning(false);
  };

  const handleStartPress = () => {
    setIsRunning(true);
    setIsPause(false);
  };

  const handleStopPress = () => {
    setIsPause(true);
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
        <ResultNumber number="00:04.42" />
      </View>

      <View style={styles.groupButton}>
        <View>
          {showLapButton && (
            <Button text="Lap" disabled={!isRunning} onPress={handleLapPress} />
          )}
          {showResetButton && (
            <Button text="Reset" onPress={handleResetPress} />
          )}
        </View>
        <View>
          {showStartButton && (
            <Button text="Start" style="green" onPress={handleStartPress} />
          )}
          {showStopButton && (
            <Button text="Stop" style="red" onPress={handleStopPress} />
          )}
        </View>
      </View>

      <ScrollView style={styles.lapTime}>
        {defaultLapTimes.reverse().map((time, index, arr) => (
          <LapTime index={arr.length - index} time={time} />
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
