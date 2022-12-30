import { View, TextInput } from 'react-native'
import React from 'react'
import { darkGreen } from '../style/color';

export default function SMInput(props) {
  // const {label, onChangeText} = props;
  return (
        <TextInput
      {...props}
      style={{ color: darkGreen, width: '80%', paddingHorizontal: 20, marginBottom: 20, borderRadius: 100, backgroundColor: 'lightgrey' }} placeholderTextColor={darkGreen}

    />
  );
}