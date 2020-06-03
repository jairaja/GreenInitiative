import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { CheckBox, ButtonGroup } from 'react-native-elements';

const HOME_TO_DESTINATION = "Rohtak to Gurgaon";
const DESTINATION_TO_HOME = "Gurgaon to Rohtak";

export default function FindRide() {

  const [count, setCount] = useState(0);
  const [selectedIndexRoute, setSelectedIndexRoute] = useState(0);
  const [selectedIndexVehiclePref, setSelectedIndexVehiclePref] = useState(0);
  const [daysSelection, setDaysSelection] = useState({
    today: true,
    tomorrow: false,
  });

  const routeButtonsGroup = [HOME_TO_DESTINATION, DESTINATION_TO_HOME]
  const vehiclePreferenceButtonsGroup = ["Car", "Bike", "Any"]

  return (
    <View style={findRideStyles.findRideMainView}>

      <View style={findRideStyles.findRideRouteSelectionContainer}>
        <Text
          style={findRideStyles.findRideRouteSelectionContainerText}
        >{"Looking for a ride from:"}</Text>

        <ButtonGroup
          onPress={(selectedindex) => {
            setSelectedIndexRoute(selectedindex);
          }}
          selectedIndex={selectedIndexRoute}
          buttons={routeButtonsGroup}
        />
      </View>

      <View style={findRideStyles.findRidesSelectedDays}>
        <Text
          style={findRideStyles.findRidesSelectedDaysText}
        >{"Riding:"}</Text>

        <CheckBox
          title="Today"
          checked={daysSelection.today}
          containerStyle={{ backgroundColor: "#F2F2F2" }}
          textStyle={{ fontWeight: "normal" }}
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
          containerStyle={{ backgroundColor: "#F2F2F2" }}
          textStyle={{ fontWeight: "normal" }}
          onPress={() => {
            setDaysSelection(
              {
                ...daysSelection,
                tomorrow: !daysSelection.tomorrow,
              }
            );
          }} />

      </View>

      <View style={findRideStyles.vehiclePreferenceConatiner}>
        <Text
          style={findRideStyles.findRideRouteSelectionContainerText}
        >{"Vehicle preference:"}</Text>

        <ButtonGroup
          onPress={(selectedindex) => {
            setSelectedIndexVehiclePref(selectedindex);
          }}
          selectedIndex={selectedIndexVehiclePref}
          buttons={vehiclePreferenceButtonsGroup}
        />
      </View>

      <Divider style={{ marginLeft: 50, marginRight: 50, }} />

      <View style={findRideStyles.findRidePostNewRequestButtonsContainer}>
        <Button
          onPress={() => setCount(count + 1)}
          title={"Find Rides"} />
        <Button
          onPress={() => setCount(count + 1)}
          title={"Post New Request"} />
      </View>

    </View >
  );
}

const findRideStyles = StyleSheet.create({
  vehiclePreferenceConatiner: {
    marginBottom: 40,
  },
  findRideMainView: {
    flexDirection: "column",
  },
  findRidePostNewRequestButtonsContainer: {
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  findRideRouteSelectionContainer: {
    marginTop: 20,
  },
  findRideRouteSelectionContainerText: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  homeDestinationText: {
    marginTop: 2,
  },
  findRidesSelectedDays: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  findRidesSelectedDaysText: {
    fontWeight: "bold",
    left: -10,
    paddingBottom: 5,
  }
});
