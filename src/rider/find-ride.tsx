import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { CheckBox, ButtonGroup } from 'react-native-elements';
import Config from './../common/config';

export default function FindRide() {

  const [riderFindRideState, setRiderFindRideState] = useState({
    selectedRouteIndex: 0,
    vehiclePreferenceIndex: 0,
    selectedDays: {
      today: true,
      tomorrow: false,
    },
  });

  const routeButtonsGroup = Config.ROUTE_INFO;
  const vehiclePreferenceButtonsGroup = Config.PREFERRED_VEHICLE;

  return (
    <View style={findRideStyles.findRideMainView}>

      <View style={findRideStyles.findRideRouteSelectionContainer}>
        <Text
          style={findRideStyles.findRideRouteSelectionContainerText}
        >{"Find rides from:"}</Text>

        <ButtonGroup
          onPress={(selectedindex) => {
            setRiderFindRideState({
              ...riderFindRideState,
              selectedRouteIndex: selectedindex,
            });
          }}
          selectedIndex={riderFindRideState.selectedRouteIndex}
          buttons={routeButtonsGroup}
        />
      </View>

      <View style={findRideStyles.findRidesSelectedDays}>
        <Text
          style={findRideStyles.findRidesSelectedDaysText}
        >{"Riding:"}</Text>

        <CheckBox
          title="Today"
          checked={riderFindRideState.selectedDays.today}
          containerStyle={{ backgroundColor: "#F2F2F2" }}
          textStyle={{ fontWeight: "normal" }}
          onPress={() => {
            setRiderFindRideState(
              {
                ...riderFindRideState,
                selectedDays: {
                  ...riderFindRideState.selectedDays,
                  today: !riderFindRideState.selectedDays.today,
                },
              }
            );
          }} />

        <CheckBox
          title="Tomorrow"
          checked={riderFindRideState.selectedDays.tomorrow}
          containerStyle={{ backgroundColor: "#F2F2F2" }}
          textStyle={{ fontWeight: "normal" }}
          onPress={() => {
            setRiderFindRideState(
              {
                ...riderFindRideState,
                selectedDays: {
                  ...riderFindRideState.selectedDays,
                  tomorrow: !riderFindRideState.selectedDays.tomorrow,
                },
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
            setRiderFindRideState({
              ...riderFindRideState,
              vehiclePreferenceIndex: selectedindex,
            });
          }}
          selectedIndex={riderFindRideState.vehiclePreferenceIndex}
          buttons={vehiclePreferenceButtonsGroup}
        />
      </View>

      <Divider style={{ marginLeft: 50, marginRight: 50, }} />

      <View style={findRideStyles.findRideButton}>
        <Button
          onPress={() => {
            setRiderFindRideState({
              ...riderFindRideState,
            });
          }}
          disabled={!(riderFindRideState.selectedDays.today ||
            riderFindRideState.selectedDays.tomorrow)}
          title={"Find Rides"} />
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
  findRideButton: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
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
