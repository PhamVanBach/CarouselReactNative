import React from 'react';
import { View } from 'react-native';
import data from './data';
import CustomSlider from './CustomSlider';
// You can import from local files

// or any pure javascript modules available in npm
export default function App() {
  return (
    <View>
      <CustomSlider data={data} />
    </View>
  );
}
