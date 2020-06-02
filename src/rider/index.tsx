import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommonStyles from '../common/common-styles';
import FindRide from './find-ride';
import PostNewRequirement from './post-new-requirement';
import GiSwitch from '../common/controls/gi-switch';

export default function Rider() {

  const [readPosts, setReadPosts] = useState(false);

  return (
    <View style={CommonStyles.container}>
      <View style={RiderStyle.readPostSelection}>

        <View style={RiderStyle.readPostSelectionMembers}>
          <Text style={{ marginTop: 2, }}>
            {"Find Ride"}
          </Text>
        </View>

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

        <View style={RiderStyle.readPostSelectionMembers}>
          <Text style={{ marginTop: 2, }}>
            {"Post New Requirement"}
          </Text>
        </View>

      </View>

      <View style={RiderStyle.readPostView}>

        {!readPosts &&
          <FindRide />
        }

        {readPosts &&
          <PostNewRequirement />
        }
      </View>

    </View>
  );
}

const RiderStyle = StyleSheet.create({
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
    borderWidth: 1,
    flex: 1,
    alignSelf: 'stretch',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "#bdbdbd",
  }
});