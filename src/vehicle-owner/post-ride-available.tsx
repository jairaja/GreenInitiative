import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import config from './../common/config';
import GiTimeDisplay from '../common/controls/gi-time-display';

interface PostRideAvailablePorp {
  visible: boolean;
}

export default function PostRideAvailable(prop: PostRideAvailablePorp) {

  const [postFindRiderState, setPostFindRiderState] = useState({
    selectedRouteIndex: 0,
    startingPointText: "",
    pickupPoints: "",
    startingTime: "",
  });

  return (
    <>
      {
        prop.visible &&
        <View style={postRideAvailableStyle.postRideAvailableSMainView}>

          <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
            <Text
              style={postRideAvailableStyle.postRideAvailableLabel}
            >Ride available from:</Text>

            <ButtonGroup
              onPress={(selectedindex) => {
                setPostFindRiderState({
                  ...postFindRiderState,
                  selectedRouteIndex: selectedindex,
                });
              }}
              selectedIndex={postFindRiderState.selectedRouteIndex}
              buttons={config.ROUTE_INFO}
            />
          </View>

          <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
            <Text style={postRideAvailableStyle.postRideAvailableLabel}>
              Starting Point:
            </Text>

            <TextInput
              value={postFindRiderState.startingPointText}
              onChangeText={(newValue) => {
                setPostFindRiderState({
                  ...postFindRiderState,
                  startingPointText: newValue,
                })
              }}
              placeholder={"Landmarks seprated by commas (required)"}
              style={postRideAvailableStyle.postRideAvailableText} />
          </View>

          <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
            <Text style={postRideAvailableStyle.postRideAvailableLabel}>
              Pickup Points:
            </Text>

            <TextInput
              multiline
              value={postFindRiderState.pickupPoints}
              onChangeText={(newValue) => {
                setPostFindRiderState({
                  ...postFindRiderState,
                  pickupPoints: newValue,
                })
              }}
              numberOfLines={2}
              placeholder={"Landmarks seprated by commas (optional)"}
              style={postRideAvailableStyle.pickupPointsText} />
          </View>

          <View style={postRideAvailableStyle.postRideAvailableTimePickerContainer}>
            <Text style={postRideAvailableStyle.postRideAvailableLabel}>
              Starting Time:
            </Text>

            <GiTimeDisplay
              updateTime={(selectedStartingTime: string) => {
                setPostFindRiderState({
                  ...postFindRiderState,
                  startingTime: selectedStartingTime,
                });
              }} />
          </View>

        </View>
      }
    </>
  );
}

const postRideAvailableStyle = StyleSheet.create({
  pickupPointsText: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
  postRideAvailableSMainView: {
    flexDirection: "column",
  },
  postRideAvailableMembersContainer: {
    marginTop: 20,
  },
  postRideAvailableTimePickerContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  postRideAvailableText: {
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
  postRideAvailableLabel: {
    fontWeight: "bold",
  },
});