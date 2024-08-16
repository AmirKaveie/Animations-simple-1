import React, { useRef, useEffect } from "react";
import { View, Animated, Button, StyleSheet } from 'react-native';

const BasicAnimation = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(translateX, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const startAnimation2 = () => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ translateX }] }]} />
      <Button title="Move Box" onPress={startAnimation} />
      <Button title="Move Box" onPress={startAnimation2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
  },
});

export default BasicAnimation;