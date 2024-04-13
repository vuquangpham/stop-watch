import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import ResultNumber from "../components/ResultNumber";
import Button from "../components/Button";
import LapTime from "../components/LapTime";
import { useEffect, useRef, useState } from "react";

import formatTime from "minutes-seconds-milliseconds";

console.log(typeof formatTime(3659));

export default function Home() {
  const ticker = useRef();

  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [time, setTime] = useState(0);
  const [lapTime, setLapTime] = useState([]);

  // vars
  const showLapButton = !(isRunning && isPause);
  const showResetButton = isRunning && isPause;
  const showStartButton = !isRunning || (isRunning && isPause);
  const showStopButton = isRunning && !isPause;

  const formattedTime = formatTime(time);

  const handleLapPress = () => {
    if (isRunning)
      setLapTime((state) => {
        state.unshift(formattedTime);
        return state;
      });
  };

  const handleResetPress = () => {
    setIsPause(false);
    setIsRunning(false);
    setLapTime([]);
    setTime(0);
  };

  const handleStartPress = () => {
    setIsRunning(true);
    setIsPause(false);
  };

  const handleStopPress = () => {
    setIsPause(true);
  };

  useEffect(() => {
    let lastTime = 0;
    const raf = (now) => {
      if (lastTime && isRunning && !isPause) {
        const elapsed = Math.round(now - lastTime) * 1000;
        setTime((state) => state + elapsed);
      }
      lastTime = now;
      ticker.current = requestAnimationFrame(raf);
    };

    raf();

    return () => {
      if (ticker.current) cancelAnimationFrame(ticker.current);
    };
  }, [isRunning, isPause, setTime]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <ResultNumber number={formattedTime} />
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
        {lapTime.map((time, index, arr) => (
          <LapTime key={index + time} index={arr.length - index} time={time} />
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
