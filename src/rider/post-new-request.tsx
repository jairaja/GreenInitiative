import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ButtonGroup, Divider } from 'react-native-elements';
import config from '../common/config';
import { TextInput } from 'react-native';
import GiTimeDisplay from '../common/controls/gi-time-display';

interface PostNewRequestProp {
  visible: boolean;
}

export default function PostNewRequest(prop: PostNewRequestProp) {

  const routeButtonsGroup = config.ROUTE_INFO;
  const vehiclePreferenceButtonsGroup = config.PREFERRED_VEHICLE;
  const whenButtonGroup = config.TOD_TOM;

  const [riderNewRequestState, setRiderNewRequestState] = useState({
    selectedRouteIndex: 0,
    preferredVehicleIndex: 0,
    selectedDayIndex: 0,
    preferredBoardingPoints: "",
    preferredStartingTime: "",
  });

  return (
    <>
      {
        prop.visible &&
        <View style={postNewRequirementStyles.postNewRequestMainView}>

          <View style={postNewRequirementStyles.postNewRequestRouteSelectionContainer}>
            <Text
              style={postNewRequirementStyles.findRideRouteLabels}
            >Looking for rides from:</Text>

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
            <Text style={postNewRequirementStyles.findRideRouteLabels}>
              Preferred Boarding Points:
            </Text>

            <TextInput
              multiline
              value={riderNewRequestState.preferredBoardingPoints}
              onChangeText={(newValue) => {
                setRiderNewRequestState({
                  ...riderNewRequestState,
                  preferredBoardingPoints: newValue,
                })
              }}
              numberOfLines={2}
              placeholder={"Landmarks seprated by commas (optional)"}
              style={postNewRequirementStyles.preferredBoardingingPointsText} />
          </View>

          <View style={postNewRequirementStyles.postNewRequirementTimePickerContainer}>
            <Text style={postNewRequirementStyles.findRideRouteLabels}>
              Preferred Time:
            </Text>

            <GiTimeDisplay
              updateTime={(selectedStartingTime: string) => {
                setRiderNewRequestState({
                  ...riderNewRequestState,
                  preferredStartingTime: selectedStartingTime,
                });
              }} />
          </View>

          <View style={postNewRequirementStyles.postNewRequestRouteSelectionContainer}>
            <Text
              style={postNewRequirementStyles.findRideRouteLabels}
            >When:</Text>

            <ButtonGroup
              onPress={(selectedIndex) => {
                setRiderNewRequestState({
                  ...riderNewRequestState,
                  selectedDayIndex: selectedIndex
                });
              }}
              selectedIndex={riderNewRequestState.selectedDayIndex}
              buttons={whenButtonGroup}
            />
          </View>

          <View style={postNewRequirementStyles.postNewRequestRouteSelectionContainer}>
            <Text
              style={postNewRequirementStyles.findRideRouteLabels}
            >Preferred Vehicle:</Text>

            <ButtonGroup
              onPress={(selectedIndex) => {
                setRiderNewRequestState({
                  ...riderNewRequestState,
                  preferredVehicleIndex: selectedIndex
                });
              }}
              selectedIndex={riderNewRequestState.preferredVehicleIndex}
              buttons={vehiclePreferenceButtonsGroup}
            />
          </View>

          <Divider style={{ marginLeft: 50, marginRight: 50, marginTop: 40 }} />

          <View style={postNewRequirementStyles.postNewRequestButton}>
            <Button
              onPress={() => {
                console.log(JSON.stringify(riderNewRequestState));
                setRiderNewRequestState({
                  ...riderNewRequestState,
                });
              }}
              title={"Post New Request"} />
          </View>

        </View>
      }
    </>
  );
}

const postNewRequirementStyles = StyleSheet.create({
  postNewRequestButton: {
    alignSelf: "center",
    marginTop: 10,
  },
  postNewRequestMainView: {
    flex: 1,
  },
  postNewRequestRouteSelectionContainer: {
    marginTop: 15,
  },
  preferredBoardingingPointsText: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
  findRideRouteLabels: {
    fontWeight: "bold",
  },
  postNewRequirementTimePickerContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
});