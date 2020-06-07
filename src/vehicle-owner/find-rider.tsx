import React from 'react';
import { View, Text } from 'react-native';

interface FindRiderProp {
  visible: boolean;
}

export default function FindRider(prop: FindRiderProp) {
  return (
    <>
      {
        prop.visible &&
        <View>
          <Text>find rider</Text>
        </View>
      }
    </>
  );
}