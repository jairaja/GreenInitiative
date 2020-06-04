import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ButtonGroup, Input } from 'react-native-elements';
import config from '../common/config';

export default function PostNewRequest() {

  const routeButtonsGroup = config.ROUTE_INFO;
  const vehiclePreferenceButtonsGroup = config.PREFERRED_VEHICLE;

  const [riderNewRequestState, setRiderNewRequestState] = useState({
    selectedRouteIndex: 0,
    preferredVehicleInddex: 0,
  });

  return (
    <View style={postNewRequirementStyles.postNewRequestMainView}>

      <View style={postNewRequirementStyles.postNewRequestRouteSelectionContainer}>
        <Text
          style={postNewRequirementStyles.findRideRouteSelectionContainerText}
        >{"Looking for rides from:"}</Text>

        <ButtonGroup
          onPress={(selectedIndex) => {
            setRiderNewRequestState({
              ...riderNewRequestState,
              selectedRouteIndex: selectedIndex
            });
          }}
          selectedIndex={riderNewRequestState.selectedRouteIndex}
          buttons={routeButtonsGroup}
        />
      </View>

      <View style={postNewRequirementStyles.postNewRequestRouteSelectionContainer}>
        <Text
          style={postNewRequirementStyles.findRideRouteSelectionContainerText}
        >{"Preferred Vehicle:"}</Text>

        <ButtonGroup
          onPress={(selectedIndex) => {
            setRiderNewRequestState({
              ...riderNewRequestState,
              preferredVehicleInddex: selectedIndex
            });
          }}
          selectedIndex={riderNewRequestState.preferredVehicleInddex}
          buttons={vehiclePreferenceButtonsGroup}
        />
      </View>

      <View style={postNewRequirementStyles.postNewRequestBoardingPoints}>
        <Text>
          {"Preferred Boarding Points:"}
        </Text>

        <Input
          multiline
          numberOfLines={2}
          placeholder={"Locations seprated by commas"}
        />
      </View>

      <Button
        onPress={() => {
          setRiderNewRequestState({
            ...riderNewRequestState,
          });
        }}
        title={"Post New Request"} />
    </View>
  );
}

const postNewRequirementStyles = StyleSheet.create({
  postNewRequestBoardingPoints: {

  },
  postNewRequestMainView: {
    flex: 1,
  },
  postNewRequestRouteSelectionContainer: {
    marginTop: 20,
  },
  findRideRouteSelectionContainerText: {
    fontWeight: "bold",
    marginLeft: 10,
  },
});