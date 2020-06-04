import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CommonStyles from '../common/common-styles';
import FindRide from './find-ride';
import PostNewRequest from './post-new-request';
import GiSwitch from '../common/controls/gi-switch';

export default function Rider() {
  const [readPosts, setReadPosts] = useState(false);

  return (
    <View style={CommonStyles.container}>
      <View style={RiderStyle.readPostSelection}>

        <TouchableOpacity
          style={RiderStyle.readPostSelectionMembers}
          onPress={() => {
            setReadPosts(false);
          }}>
          <Text style={{ marginTop: 3, }}>
            {"Find Ride"}
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
          style={RiderStyle.readPostSelectionMembers}
          onPress={() => {
            setReadPosts(true);
          }}
        >
          <Text style={{ marginTop: 3, }}>
            {"Post New Request"}
          </Text>
        </TouchableOpacity>

      </View>

      <View style={RiderStyle.readPostView}>
        {!readPosts &&
          <FindRide />
        }

        {readPosts &&
          <PostNewRequest />
        }
      </View>

    </View>
  );
}

const RiderStyle = StyleSheet.create({
  readPostSelection: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
  },
  readPostSelectionMembers: {
    flex: 8,
    alignItems: 'center',
  },
  readPostView: {
    margin: 10,
    borderWidth: 0.5,
    flex: 1,
    alignSelf: 'stretch',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderColor: "#bdbdbd",
  }
});