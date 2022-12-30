import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE,Marker,Callout } from 'react-native-maps'
import styles from '../style/style';
import database from '@react-native-firebase/database';

// Geolocati\on.getCurrentPosition(info => console.log(info)); 
const OrderLocation = () => {
    const[location,setLocation]=useState([])
    // navigator.geolocation = require('@react-native-community/geolocation');
   const getgeolocation=()=>{
    database().ref('location').once('value', snapshot => {
      
        // let li = Object.values(snapshot.val())
        // console.log(li)
        // console.log(Object.values(snapshot.val()))
        // console.log(list)
        // setLocation(li)
      })
   }
    useEffect(()=>{
      getgeolocation() 
    })
  return (
    <View style={[styles.h100]}>
    <View style={[styles.p2,styles.m2,styles.rounded,styles.border1,]}>

    </View>
{}
    {/* <MapView
     provider={PROVIDER_GOOGLE} // remove if not using Google Maps
     style={{
      height:500,
      width:"100%"
     }}
     region={{
       latitude: location.latitude ,
       longitude: location.longitude,
       latitudeDelta: location.latitude,
       longitudeDelta: location.longitude,
     }}
   >
    <Marker
    coordinate={{
      
        latitude: location.latitude ,
        longitude: location.longitude,
    }}
    >
      <Callout tooltip>
      <View
                style={[
                  styles.bgWhite,
                  styles.p2,
                  styles.rounded,
                  styles.border1,
                ]}>
               
              </View>
      </Callout>

    </Marker>
   </MapView> */}

  </View>
)
}

export default OrderLocation