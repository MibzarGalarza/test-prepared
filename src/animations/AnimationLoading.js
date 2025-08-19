import React from 'react';
import { View, Text, Image } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingAnimation = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <LottieView
      source={require('../../assets/loading.json')} // Asegúrate de que la ruta sea correcta
      autoPlay
      loop={true}
      style={{ width: 200, height: 200 }}
    />
  </View>
);
export default LoadingAnimation;
