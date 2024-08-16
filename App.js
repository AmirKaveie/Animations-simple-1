import React, { useRef, useEffect } from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';

const BasicAnimation = () => {
  // Create a reference for the animated value
  const translateX = useRef(new Animated.Value(0)).current;

  // Function to start the animation
  const startAnimation = () => {
    Animated.timing(translateX, {
      toValue: 300,  // Move the box to x = 300
      duration: 1000,  // Duration of the animation
      useNativeDriver: true,  // Use native driver for better performance
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Animated View */}
      <Animated.View style={[styles.box, { transform: [{ translateX }] }]} />
      {/* Button to trigger the animation */}
      <Button title="Move Box" onPress={startAnimation} />
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
