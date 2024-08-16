import React, { useRef } from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';

const InterpolationAnimation = () => {
  const scale = useRef(new Animated.Value(0)).current;

  const startInterpolationAnimation = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const scaleInterpolate = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],  // Scale the box from 1 to 2
  });

  const colorInterpolate = scale.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],  // Transition color from tomato to purple
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          { transform: [{ scale: scaleInterpolate }], backgroundColor: colorInterpolate },
        ]}
      />
      <Button title="Scale & Color Change" onPress={startInterpolationAnimation} />
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

export default InterpolationAnimation;
