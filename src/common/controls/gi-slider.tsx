import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Slider } from 'react-native-elements';

interface GiSliderInterface {
  minimumValue: number;
  maximumValue: number;
  step: number;
  initialValue?: number;
  onValueChange(newValue: number): void;
}

function GiSlider(props: GiSliderInterface) {

  const [sliderValue, setSliderValue] = useState(props.initialValue ? props.initialValue : props.minimumValue);

  return (
    <View style={GiSliderStyle.giSliderContainer}>
      <Slider
        style={GiSliderStyle.giSliderComponent}
        thumbTintColor="#2089DC"
        minimumTrackTintColor="#2089DC"
        value={sliderValue}
        animateTransitions
        minimumValue={props.minimumValue}
        maximumValue={props.maximumValue}
        step={props.step}
        onValueChange={(newValue) => {
          setSliderValue(newValue);
          props.onValueChange(newValue);
        }}
      />
      <Text style={GiSliderStyle.giSliderText}>₹{sliderValue}</Text>
    </View>
  );
}

const GiSliderStyle = StyleSheet.create({
  giSliderContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  giSliderComponent: {
    width: 100,
  },
  giSliderText: {
    marginLeft: 10,
    justifyContent: "center",
    paddingTop: 10,
  }
});

export default GiSlider;