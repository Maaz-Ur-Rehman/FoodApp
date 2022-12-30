import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import database from '@react-native-firebase/database';
import SMInput from '../components/smInput'
import BackGround from '../components/background';
import styles from '../style/style';
import Btn from '../components/btn';
import { darkGreen } from '../style/color';

export default function RegisterItem() {
    const [modal,setModal]=useState({})

    let register=()=>{
        console.log(modal)
        modal.id=database().ref('food/').push().key
        database().ref(`food/${modal.id}`).set(modal)
        .then((res)=>{
            // console.log(res)
            Alert.alert("Register Your food")
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    
  return (
    <BackGround>
    <View style={[styles.alignItemsCenter, { width: 360 }]}>
        <Text style={{ color: 'white', fontSize: 34, fontWeight: 'bold', marginVertical: 20 }}>Register Vehicle</Text>
        <View style={[styles.bgWhite, styles.alignItemsCenter, { width: 350, height: 700, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 50 }]}>
            <SMInput placeholder='Food Name' onChangeText={(e)=>{setModal({...modal,foodName:e})}} />
            <SMInput placeholder='Food Price' onChangeText={(e)=>{setModal({...modal,foodPrice:e})}} />
            <SMInput placeholder='Category' onChangeText={(e)=>{setModal({...modal,category :e})}} />
            <Btn btnLabel='Register' bgColor={darkGreen} textColor='white' onPress={register} />
        </View>
    </View>
</BackGround>
  )
}