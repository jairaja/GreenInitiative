import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import config from '../common/config';

interface FindRiderProp {
  visible: boolean;
}

function FindRider(prop: FindRiderProp) {

  const [findRiderState, setFindRiderState] = useState({
    selectedRouteIndex: 0,
  });

  return (
    <>
      {
        prop.visible &&
        <View style={findRiderStyle.findRiderMainView}>

          <View style={findRiderStyle.postRideAvailableMembersContainer}>
            <Text
              style={findRiderStyle.findRiderLabel}
            >Ride available from:</Text>

            <ButtonGroup
              onPress={(selectedindex) => {
                setFindRiderState({
                  ...findRiderState,
                  selectedRouteIndex: selectedindex,
                });
              }}
              selectedIndex={findRiderState.selectedRouteIndex}
              buttons={config.ROUTE_INFO}
            />
          </View>


        </View>
      }
    </>
  );
}

const findRiderStyle = StyleSheet.create({
  findRiderMainView: {
    flexDirection: "column",
  },
  postRideAvailableMembersContainer: {
    marginTop: 15,
  },
  findRiderLabel: {
    fontWeight: "bold",
  },
});

export default FindRider;