import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import config from '../common/config';
import { Divider } from 'react-native-paper';

interface FindRiderProp {
  visible: boolean;
}

function FindRider(prop: FindRiderProp) {

  const [findRiderState, setFindRiderState] = useState({
    selectedRouteIndex: 0,
    vehicleTypeIndex: 0,
    selectedDayIndex: 0,
  });

  return (
    <>
      {
        prop.visible &&
        <View style={findRiderStyle.findRiderMainView}>

          <View style={findRiderStyle.postRideAvailableMembersContainer}>
            <Text
              style={findRiderStyle.findRiderLabel}
            >Find Riders from:</Text>

            <ButtonGroup
              onPress={(selectedindex) => {
                setFindRiderState({
                  ...findRiderState,
                  selectedRouteIndex: selectedindex,
                });
              }}
              selectedIndex={findRiderState.selectedRouteIndex}
              buttons={config.ROUTE_INFO}
            />
          </View>

          <View style={findRiderStyle.postRideAvailableMembersContainer}>
            <Text
              style={findRiderStyle.findRiderLabel}
            >When:</Text>

            <ButtonGroup
              onPress={(selectedIndex) => {
                setFindRiderState({
                  ...findRiderState,
                  selectedDayIndex: selectedIndex
                });
              }}
              selectedIndex={findRiderState.selectedDayIndex}
              buttons={config.TOD_TOM}
            />
          </View>

          <View style={findRiderStyle.postRideAvailableMembersContainer}>
            <Text
              style={findRiderStyle.findRiderLabel}
            >My Vehicle Type:</Text>

            <ButtonGroup
              onPress={(selectedindex) => {
                setFindRiderState({
                  ...findRiderState,
                  vehicleTypeIndex: selectedindex,
                });
              }}
              selectedIndex={findRiderState.vehicleTypeIndex}
              buttons={config.VEHICLE_TYPE_FOR_VEHICLE_OWNER}
            />
          </View>

          <Divider style={{ marginLeft: 50, marginRight: 50, marginTop: 30 }} />

          <View style={findRiderStyle.findRiderButton}>
            <Button
              onPress={() => {
                setFindRiderState({
                  ...findRiderState,
                });
              }}
              title={"Find Riders"} />
          </View>

        </View>
      }
    </>
  );
}

const findRiderStyle = StyleSheet.create({
  findRiderMainView: {
    flexDirection: "column",
  },
  postRideAvailableMembersContainer: {
    marginTop: 15,
  },
  findRiderLabel: {
    fontWeight: "bold",
  },
  findRiderButton: {
    alignSelf: "center",
    marginTop: 10,
  },
});

export default FindRider;