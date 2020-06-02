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