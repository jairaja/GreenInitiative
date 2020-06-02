import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import GiSwitch from '../common/controls/gi-switch';
import { CheckBox } from 'react-native-elements';

const HOME_TO_DESTINATION = "Rohtak to Gurgaon";
const DESTINATION_TO_HOME = "Gurgaon to Rohtak";

export default function FindRide() {

  const [count, setCount] = useState(0);
  const [destToHome, setDestToHome] = useState(false);

  const [daysSelection, setDaysSelection] = useState({
    today: false,
    tomorrow: false,
  });

  return (
    <View style={findRideStyles.findRideMainView}>
      {/* <Text>{"find ride                                                                         " + count}</Text> */}

      <View style={findRideStyles.findRideRouteSelectionContainer}>

        <View style={findRideStyles.findRideRouteSelectionElements}>
          <Text style={findRideStyles.homeDestinationText}>
            {HOME_TO_DESTINATION}
          </Text>
        </View>

        <View style={{
          flex: 1,
          alignItems: 'center',
        }}>
          <GiSwitch
            value={destToHome}
            onValueChange={() => {
              setDestToHome(!destToHome);
            }}
          />
        </View>

        <View style={findRideStyles.findRideRouteSelectionElements}>
          <Text style={findRideStyles.homeDestinationText}>
            {DESTINATION_TO_HOME}
          </Text>
        </View>

      </View>

      <View style={findRideStyles.findRidesSelectedDays}>
        <Text>{"When:"}</Text>

        <CheckBox
          title="Today"
          checked={daysSelection.today}
          containerStyle={{ backgroundColor: "#f5f5f5" }}
          onPress={() => {
            setDaysSelection(
              {
                ...daysSelection,
                today: !daysSelection.today,
              }
            );
          }} />

        <CheckBox
          title="Tomorrow"
          checked={daysSelection.tomorrow}
          containerStyle={{ backgroundColor: "#f5f5f5" }}
          onPress={() => {
            setDaysSelection(
              {
                ...daysSelection,
                tomorrow: !daysSelection.tomorrow,
              }
            );
          }} />

      </View>

      <Divider />

      <View style={findRideStyles.findRideFindButton}>
        <Button
          onPress={() => setCount(count + 1)}
          title={"Find"} />
      </View>

    </View >
  );
}

const findRideStyles = StyleSheet.create({
  findRideMainView: {
    flexDirection: "column",
  },
  findRideFindButton: {
    width: 120,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  findRideRouteSelectionContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  findRideRouteSelectionElements: {
    flex: 5,
    alignItems: 'center',
  },
  homeDestinationText: {
    marginTop: 2,
  },
  findRidesSelectedDays: {
    flexDirection: "row",
  }
});
