import React from 'react';
import { Switch } from 'react-native-paper';

interface GiSwitchProps {
  value: boolean;
  onValueChange: () => void;
}

export default function GiSwitch(props: GiSwitchProps) {

  const { value, onValueChange } = props;

  return (
    <Switch
      trackColor={{ false: "#2089DC", true: "#2089DC" }}
      thumbColor={"#F8F8FF"}
      ios_backgroundColor="#2089DC"
      value={value}
      onValueChange={onValueChange}
    />
  );
}


{/* <View style={RiderStyle.readPostSelection}>

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
            {"Post New Requirement"}
          </Text>
        </TouchableOpacity>

      </View> */}

      // StyleSheet.create({
      //   readPostSelection: {
      //     marginTop: 30,
      //     marginBottom: 20,
      //     flexDirection: "row",
      //   },
      //   readPostSelectionMembers: {
      //     flex: 8,
      //     alignItems: 'center',
      //   },