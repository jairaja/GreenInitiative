import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CommonStyles from '../common/common-styles';
import { Switch } from 'react-native-paper';

export default function Commuter() {

  const [readPosts, setReadPosts] = useState(true);

  return (
    <View style={CommonStyles.container}>
      <View style={{
        // flex: 0.1,
        marginTop: 3,
        flexDirection: "row",
        alignItems: 'flex-start',
        alignContent: "flex-start",
      }}>
        <Text>{"Search Seats Availability"}</Text>
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