import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn(props ) {
    const { bgColor, btnLabel, textColor,onPress } = props
    return (

        <TouchableOpacity onPress={onPress} style={{ backgroundColor: bgColor, borderRadius: 100,width:300,paddingVertical:5,marginVertical:10, alignItems:'center'}}>
            <Text style={{ color: textColor, fontSize: 26, fontWeight: 'bold' }}>{btnLabel}</Text>

        </TouchableOpacity>
    )
}