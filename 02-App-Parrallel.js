import React, { useRef } from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';

const ParallelAnimation = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const startParallelAnimation = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],  // Rotate the box 360 degrees
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          { transform: [{ translateX }, { rotate: rotateInterpolate }] },
        ]}
      />
      <Button title="Move & Rotate Box" onPress={startParallelAnimation} />
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
    backgroundColor: 'coral',
  },
});

export default ParallelAnimation;
