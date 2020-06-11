import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { ButtonGroup, Divider, CheckBox, Slider } from 'react-native-elements';
import config from './../common/config';
import GiTimeDisplay from '../common/controls/gi-time-display';
import GiSlider from '../common/controls/gi-slider';

interface PostRideAvailablePorp {
  visible: boolean;
}

export default function PostRideAvailable(prop: PostRideAvailablePorp) {

  const [postRideAvailableState, setPostRideAvailableState] = useState({
    selectedRouteIndex: 0,
    selectedDayIndex: 0,
    vehicleTypeIndex: 0,
    fuelTypeIndex: 0,
    preferredCommModeIndex: 0,
    cngRefillStop: false,
    cashOnlyPayment: false,
    startingPointText: "",
    sharePerSeat: 100,
    pickupPoints: "",
    additionalComments: "",
    dropPoints: "",
    startingTime: "",
    selectedStartingTime: new Date(),
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
                setPostRideAvailableState({
                  ...postRideAvailableState,
                  selectedRouteIndex: selectedindex,
                });
              }}
              selectedIndex={postRideAvailableState.selectedRouteIndex}
              buttons={config.ROUTE_INFO}
            />
          </View>

          <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
            <Text style={postRideAvailableStyle.postRideAvailableLabel}>
              Starting Point:
            </Text>

            <TextInput
              value={postRideAvailableState.startingPointText}
              onChangeText={(newValue) => {
                setPostRideAvailableState({
                  ...postRideAvailableState,
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
              value={postRideAvailableState.pickupPoints}
              onChangeText={(newValue) => {
                setPostRideAvailableState({
                  ...postRideAvailableState,
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
              value={postRideAvailableState.dropPoints}
              onChangeText={(newValue) => {
                setPostRideAvailableState({
                  ...postRideAvailableState,
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
              selectedTime={postRideAvailableState.selectedStartingTime}
              updateTime={(selectedTimeDisplay: string, selectedTime: Date) => {
                setPostRideAvailableState({
                  ...postRideAvailableState,
                  startingTime: selectedTimeDisplay,
                  selectedStartingTime: selectedTime,
                });
              }} />
          </View>

          <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
            <Text
              style={postRideAvailableStyle.postRideAvailableLabel}
            >When:</Text>

            <ButtonGroup
              onPress={(selectedIndex) => {
                setPostRideAvailableState({
                  ...postRideAvailableState,
                  selectedDayIndex: selectedIndex
                });
              }}
              selectedIndex={postRideAvailableState.selectedDayIndex}
              buttons={config.TOD_TOM}
            />
          </View>

          <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
            <Text
              style={postRideAvailableStyle.postRideAvailableLabel}
            >Vehicle Type:</Text>

            <ButtonGroup
              onPress={(selectedindex) => {
                setPostRideAvailableState({
                  ...postRideAvailableState,
                  vehicleTypeIndex: selectedindex,
                  cngRefillStop: false,
                  fuelTypeIndex: 0,
                });
              }}
              selectedIndex={postRideAvailableState.vehicleTypeIndex}
              buttons={config.VEHICLE_TYPE_FOR_VEHICLE_OWNER}
            />
          </View>

          {postRideAvailableState.vehicleTypeIndex === 0 &&
            <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
              <Text
                style={postRideAvailableStyle.postRideAvailableLabel}
              >Fuel Type:</Text>

              <ButtonGroup
                onPress={(selectedindex) => {
                  setPostRideAvailableState({
                    ...postRideAvailableState,
                    cngRefillStop: false,
                    fuelTypeIndex: selectedindex,
                  });
                }}
                selectedIndex={postRideAvailableState.fuelTypeIndex}
                buttons={config.FUEL_TYPE}
              />
            </View>
          }
          {postRideAvailableState.fuelTypeIndex === 2 &&
            <View style={postRideAvailableStyle.postRideAvailabilityCngCarOptions}>
              <CheckBox
                title="CNG Refill Stop"
                checked={postRideAvailableState.cngRefillStop}
                containerStyle={{ backgroundColor: "#F2F2F2" }}
                textStyle={{ fontWeight: "normal" }}
                onPress={() => {
                  setPostRideAvailableState(
                    {
                      ...postRideAvailableState,
                      cngRefillStop: !postRideAvailableState.cngRefillStop,
                    }
                  );
                }} />
            </View>
          }

          <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
            <Text
              style={postRideAvailableStyle.postRideAvailableLabel}
            >Preferred Comm Mode:</Text>

            <ButtonGroup
              onPress={(selectedIndex) => {
                setPostRideAvailableState({
                  ...postRideAvailableState,
                  preferredCommModeIndex: selectedIndex
                });
              }}
              selectedIndex={postRideAvailableState.preferredCommModeIndex}
              buttons={config.COMMUNICATION_MODE}
            />
          </View>

          <View style={postRideAvailableStyle.postRideAvailableShareAmountContainer}>
            <Text
              style={{ fontWeight: "bold", paddingTop: 17, marginRight: 5, }}
            >Share per seat:</Text>

            <GiSlider
              minimumValue={100}
              maximumValue={150}
              step={10}
              initialValue={postRideAvailableState.sharePerSeat}
              onValueChange={newValue => {
                setPostRideAvailableState({
                  ...postRideAvailableState,
                  sharePerSeat: newValue,
                });
              }}
            />

            <CheckBox
              title="Cash Only"
              checked={postRideAvailableState.cashOnlyPayment}
              containerStyle={{ backgroundColor: "#F2F2F2" }}
              textStyle={{ fontWeight: "normal" }}
              onPress={() => {
                setPostRideAvailableState(
                  {
                    ...postRideAvailableState,
                    cashOnlyPayment: !postRideAvailableState.cashOnlyPayment,
                  }
                );
              }} />

          </View>

          <View style={postRideAvailableStyle.postRideAvailableMembersContainer}>
            <Text style={postRideAvailableStyle.postRideAvailableLabel}>
              Additional comments / information:
            </Text>

            <TextInput
              multiline
              value={postRideAvailableState.additionalComments}
              onChangeText={(newValue) => {
                setPostRideAvailableState({
                  ...postRideAvailableState,
                  additionalComments: newValue,
                })
              }}
              numberOfLines={2}
              placeholder={"Car details? Boot space? etc... (optional)"}
              style={postRideAvailableStyle.pickupPointsText} />
          </View>

          <Divider style={{ marginLeft: 50, marginRight: 50, marginTop: 30 }} />

          <View style={postRideAvailableStyle.postNewAvailabilityButton}>
            <Button
              onPress={() => {
                setPostRideAvailableState({
                  ...postRideAvailableState,
                });
              }}
              title={"Post Availability"} />
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
  postNewAvailabilityButton: {
    alignSelf: "center",
    marginTop: 10,
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
  postRideAvailableShareAmountContainer: {
    marginTop: 4,
    flexDirection: "row",
  },
  postRideAvailabilityCngCarOptions: {
    alignSelf: "center",
  }
});