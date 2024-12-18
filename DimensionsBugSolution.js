import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const MyComponent = () => {
  const [screenHeight, setScreenHeight] = useState(height);

  useEffect(() => {
    const getDimensions = () => {
      const { height } = Dimensions.get('window');
      setScreenHeight(height);
    };
    getDimensions();
    Dimensions.addEventListener('change', getDimensions);
    return () => {
      Dimensions.removeEventListener('change', getDimensions);
    };
  }, []);

  return (
    <View style={[styles.container, { height: screenHeight }]}>
      <Text>Screen Height: {screenHeight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent;