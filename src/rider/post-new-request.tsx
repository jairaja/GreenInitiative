import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonGroup, Input } from 'react-native-elements';
import config from '../common/config';

export default function PostNewRequest() {

  const routeButtonsGroup = config.ROUTE_INFO;
  const vehiclePreferenceButtonsGroup = config.PREFERRED_VEHICLE;
  // const [selectedIndexRoute, setSelectedIndexRoute] = useState(0);
  const [riderNewRequest, setRiderNewRequest] = useState({
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
            setRiderNewRequest({
              ...riderNewRequest,
              selectedRouteIndex: selectedIndex
            });
          }}
          selectedIndex={riderNewRequest.selectedRouteIndex}
          buttons={routeButtonsGroup}
        />
      </View>

      <View style={postNewRequirementStyles.postNewRequestRouteSelectionContainer}>
        <Text
          style={postNewRequirementStyles.findRideRouteSelectionContainerText}
        >{"Preferred Vehicle:"}</Text>

        <ButtonGroup
          onPress={(selectedIndex) => {
            setRiderNewRequest({
              ...riderNewRequest,
              preferredVehicleInddex: selectedIndex
            });
          }}
          selectedIndex={riderNewRequest.preferredVehicleInddex}
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