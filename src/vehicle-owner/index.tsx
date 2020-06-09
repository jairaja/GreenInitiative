import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import CommonStyles from '../common/common-styles';
import GiSwitch from '../common/controls/gi-switch';
import PostRideAvailable from './post-ride-available';
import FindRider from './find-rider';

export default function VehicleOwner() {
  const [readPosts, setReadPosts] = useState(false);

  return (
    <ScrollView style={CommonStyles.container}>

      <View style={vehicleOwnerStyles.readPostSelection}>

        <TouchableOpacity
          style={vehicleOwnerStyles.readPostSelectionMembers}
          onPress={() => {
            setReadPosts(false);
          }}>
          <Text style={{ marginTop: 3, }}>
            Post Ride Availability
          </Text>
        </TouchableOpacity>

        <View style={{
          flex: 1,
          alignItems: 'center',
        }}>
          <GiSwitch
            value={readPosts}
            onValueChange={() => {
              setReadPosts(!readPosts);
            }}
          />
        </View>

        <TouchableOpacity
          style={vehicleOwnerStyles.readPostSelectionMembers}
          onPress={() => {
            setReadPosts(true);
          }}
        >
          <Text style={{ marginTop: 3, }}>
            Find Rider
          </Text>
        </TouchableOpacity>

      </View>

      <View style={vehicleOwnerStyles.readPostView}>
        <PostRideAvailable visible={!readPosts} />
        <FindRider visible={readPosts} />
      </View>

    </ScrollView>
  );
}

const vehicleOwnerStyles = StyleSheet.create({
  readPostSelection: {
    marginTop: 20,
    flexDirection: "row",
  },
  readPostSelectionMembers: {
    flex: 8,
    alignItems: 'center',
  },
  readPostView: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderWidth: 1,
    flex: 1,
    alignSelf: 'stretch',
    borderColor: "#bdbdbd",
  }
});