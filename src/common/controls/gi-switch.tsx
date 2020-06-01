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
      trackColor={{ false: "#808080", true: "#808080" }}
      thumbColor={"#F8F8FF"}
      ios_backgroundColor="#808080"
      value={value}
      onValueChange={onValueChange}
    />
  );
}