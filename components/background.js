import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function BackGround(props) {

    let {children}=props
  return (
    <View>

    <ImageBackground  source={{uri:'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80'}} style={{height:'100%'}}   />
        <View style={{position:'absolute'}}>
            {children}
        </View>
    </View>
  )
}