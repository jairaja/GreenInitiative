import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PostNewRequirement() {
  return (
    <View style={postNewRequirementStyles.postNewRequirementMainView}>
      <Text>{"Post New Requirement"}</Text>
    </View>
  );
}

const postNewRequirementStyles = StyleSheet.create({
  postNewRequirementMainView: {
    flex: 1,
  }
});
