import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import GiSwitch from '../common/controls/gi-switch';

const HOME_TO_DESTINATION = "Rohtak to Gurgaon";
const DESTINATION_TO_HOME = "Gurgaon to Rohtak";

export default function FindRide() {

  const [count, setCount] = useState(0);
  const [destToHome, setDestToHome] = useState(false);

  return (
    <View style={findRideStyles.findRideMainView}>
      <Text>{"find ride                                                                         " + count}</Text>

      <View style={findRideStyles.findRideRouteSelectionContainer}>
        <View style={findRideStyles.findRideRouteSelectionElements}>
          <Text style={{ marginTop: 5, }}>
            {HOME_TO_DESTINATION}
          </Text>
        </View>

        <View style={findRideStyles.findRideRouteSelectionElements}>
          <GiSwitch
            value={destToHome}
            onValueChange={() => {
              setDestToHome(!destToHome);
            }}
          />
        </View>

        <View style={findRideStyles.findRideRouteSelectionElements}>
          <Text>
            {DESTINATION_TO_HOME}
          </Text>
        </View>
      </View>

      <Divider />
      <Button
        onPress={() => setCount(count + 1)}
        title={"Find"} />
    </View>
  );
}

const findRideStyles = StyleSheet.create({
  findRideMainView: {
    flexDirection: "column",
  },
  findRideRouteSelectionContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  findRideRouteSelectionElements: {
    flex: 1,
    alignItems: 'center',
  }
});
