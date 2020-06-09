import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { CheckBox, ButtonGroup } from 'react-native-elements';
import Config from './../common/config';

interface FindRideProp {
  visible: boolean;
}

export default function FindRide(prop: FindRideProp) {

  const [riderFindRideState, setRiderFindRideState] = useState({
    selectedRouteIndex: 0,
    vehiclePreferenceIndex: 0,
    selectedDays: {
      today: true,
      tomorrow: false,
    },
  });

  return (
    <>
      {
        prop.visible &&
        <View style={findRideStyles.findRideMainView}>

          <View style={findRideStyles.findRideRouteSelectionContainer}>
            <Text
              style={findRideStyles.findRideRouteSelectionContainerText}
            >Find rides from:</Text>

            <ButtonGroup
              onPress={(selectedindex) => {
                setRiderFindRideState({
                  ...riderFindRideState,
                  selectedRouteIndex: selectedindex,
                });
              }}
              selectedIndex={riderFindRideState.selectedRouteIndex}
              buttons={Config.ROUTE_INFO}
            />
          </View>

          <View style={findRideStyles.findRidesSelectedDays}>
            <Text
              style={findRideStyles.findRidesSelectedDaysText}
            >Riding:</Text>

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
            >Vehicle preference:</Text>

            <ButtonGroup
              onPress={(selectedindex) => {
                setRiderFindRideState({
                  ...riderFindRideState,
                  vehiclePreferenceIndex: selectedindex,
                });
              }}
              selectedIndex={riderFindRideState.vehiclePreferenceIndex}
              buttons={Config.PREFERRED_VEHICLE}
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
      }
    </>
  );
}

const findRideStyles = StyleSheet.create({
  vehiclePreferenceConatiner: {
    marginBottom: 30,
    marginTop: 15,
  },
  findRideMainView: {
    flexDirection: "column",
  },
  findRideButton: {
    alignSelf: "center",
    marginTop: 15,
  },
  findRideRouteSelectionContainer: {
    marginTop: 15,
  },
  findRideRouteSelectionContainerText: {
    fontWeight: "bold",
  },
  homeDestinationText: {
    marginTop: 2,
  },
  findRidesSelectedDays: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 15,
  },
  findRidesSelectedDaysText: {
    fontWeight: "bold",
    // left: -15,
    paddingBottom: 5,
  }
});
