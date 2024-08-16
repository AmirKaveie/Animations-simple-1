import React, { useRef } from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';

const SpringAnimation = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  const startSpringAnimation = () => {
    Animated.spring(translateY, {
      toValue: 300,  // Move the box to y = 300
      friction: 2,  // Control the bounciness
      tension: 160,  // Control the stiffness of the spring
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ translateY }] }]} />
      <Button title="Bounce Box" onPress={startSpringAnimation} />
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
    backgroundColor: 'skyblue',
  },
});

export default SpringAnimation;
