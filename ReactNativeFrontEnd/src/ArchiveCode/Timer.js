import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Timer = ({ style }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setElapsedTime(0);
  };

  useEffect(() => {
    startTimer(); // Start the timer when the component mounts
    return () => {
      clearInterval(intervalRef.current); // Clear interval on component unmount
    };
  }, []);

  return (
    <View style={styles.viewTimer}>
      <Text style={[styles.timerText, style]}>{formatTime(elapsedTime)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Monospace',
    fontWeight: 'bold',
  },
  viewTimer:{
  }
});

export default Timer;
