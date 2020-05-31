import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommonStyles from '../common/common-styles';
import { Switch } from 'react-native-paper';

export default function Rider() {

  const [readPosts, setReadPosts] = useState(true);

  return (
    <View style={CommonStyles.container}>
      <View style={RiderStyle.readPostSelection}>
        <Text style={{
          // paddingTop="3px",
        }}>{"Find Ride"}</Text>
        <Switch
          trackColor={{ false: "#808080", true: "#808080" }}
          thumbColor={"#F8F8FF"}
          ios_backgroundColor="#808080"
          value={readPosts}
          onValueChange={() => {
            setReadPosts(!readPosts);
          }} />
        <Text>{"Post New Requirement"}</Text>

      </View>

      {readPosts &&
        <View>
          <Text>{"ReadPosts true"}</Text>
        </View>
      }

      {!readPosts &&
        <View>
          <Text>{"ReadPosts false"}</Text>
        </View>
      }

    </View>
  );
}

const RiderStyle = StyleSheet.create({
  readPostSelection: {
    marginTop: 20,
    flexDirection: "row",
    // alignSelf: "center",
    // alignItems: 'flex-start',
    // alignContent: "flex-start",
    justifyContent: "flex-start",
  }
});