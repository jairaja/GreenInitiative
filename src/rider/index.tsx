import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CommonStyles from '../common/common-styles';
import FindRide from './find-ride';

export default function Rider() {

  return (
    <View style={CommonStyles.container}>

      <View style={RiderStyle.readPostView}>
        <FindRide />
      </View>

    </View>
  );
}

const RiderStyle = StyleSheet.create({
  readPostView: {
    margin: 10,
    borderWidth: 0.5,
    flex: 1,
    alignSelf: 'stretch',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderColor: "#bdbdbd",
  }
});