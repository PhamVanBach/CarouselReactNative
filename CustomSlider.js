import React, { useState } from 'react';
import { View, Text, Dimensions, Button } from 'react-native';
import CarouselItem from './CarouselItem';
import CustomPaging from './CustomPaging';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
export default function CustomSlider({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    onSnapToItem: (index) => setSlideIndex(index),
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 40,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container}>
      <Carousel
        {...settings}
        pagingEnabled
        />
      <CustomPaging data={data} activeSlide={slideIndex} />
    </View>
  );
}
