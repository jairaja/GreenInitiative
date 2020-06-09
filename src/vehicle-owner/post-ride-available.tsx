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
    selectedDayIndex: 0,
    startingPointText: "",
    pickupPoints: "",
    dropPoints: "",
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
              placeholder={"Pls try to be specific (required)"}
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

          <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
            <Text style={postRideAvailableStyle.postRideAvailableLabel}>
              Drop Points:
            </Text>

            <TextInput
              multiline
              value={postFindRiderState.dropPoints}
              onChangeText={(newValue) => {
                setPostFindRiderState({
                  ...postFindRiderState,
                  dropPoints: newValue,
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

          <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
            <Text
              style={postRideAvailableStyle.postRideAvailableLabel}
            >When:</Text>

            <ButtonGroup
              onPress={(selectedIndex) => {
                setPostFindRiderState({
                  ...postFindRiderState,
                  selectedDayIndex: selectedIndex
                });
              }}
              selectedIndex={postFindRiderState.selectedDayIndex}
              buttons={config.TOD_TOM}
            />
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
    marginTop: 15,
  },
  postRideAvailableTimePickerContainer: {
    marginTop: 15,
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