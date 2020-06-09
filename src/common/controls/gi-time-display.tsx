import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface GiTimeDisplayProps {
  updateTime(selectedStartingTime: string): void;
}

function GiTimeDisplay(prop: GiTimeDisplayProps) {

  const getTimeComponentValue = (value: number): string => {
    return (value / 10) > 1 ? value.toString() : '0' + value;
  }

  const getTime = (time: Date): string => {
    return `${getTimeComponentValue(time.getHours())} : ${getTimeComponentValue(time.getMinutes())}`;
  }

  const [giTimePickerState, setGiTimePickerState] = useState({
    showTimePicker: false,
    selectedTime: new Date(),
  });

  return (
    <>
      <TouchableOpacity
        style={GiTimeDisplayStyle.giTimeDisplayContainer}
        onPress={() => {
          setGiTimePickerState({
            ...giTimePickerState,
            showTimePicker: true,
          });
        }}
      >
        <Text>
          {getTime(giTimePickerState.selectedTime)}
        </Text>
        <Text
          style={GiTimeDisplayStyle.giTimeDisplay24FormatText}>
          (24-Hours format)
        </Text>
      </TouchableOpacity>

      {
        giTimePickerState.showTimePicker &&
        <DateTimePicker
          value={giTimePickerState.selectedTime}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={(event, selectedTime) => {
            const currentSelectedTime = selectedTime || giTimePickerState.selectedTime;
            setGiTimePickerState({
              showTimePicker: (Platform.OS === 'ios'),
              selectedTime: currentSelectedTime,
            });
            prop.updateTime(getTime(currentSelectedTime));
          }}
        />
      }
    </>
  );
}

const GiTimeDisplayStyle = StyleSheet.create({
  giTimeDisplayContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 20,
    width: 150,
    borderColor: "#000000",
    borderWidth: 0.5,
    padding: 5,
  },
  giTimeDisplay24FormatText: {
    marginLeft: 5,
    color: "#cccccc",
  },
});

export default GiTimeDisplay;