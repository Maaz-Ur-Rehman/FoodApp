import { View, Text, ScrollView, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-vector-icons/MaterialIcons'
import BackGround from '../components/background'
import styles from '../style/style'
import { darkGreen } from '../style/color'
import Btn from '../components/btn'
// import Geolocation from '@react-native-community/geolocation';
import database from '@react-native-firebase/database';

export default function Product({ navigation, route }) {
    // const [location, setLocation] = useState({})
    const[model,setModel]=useState({})
    let data = route.params
    useEffect(()=>{

        setModel(data)
    })
    // let getLiveLocation = () => {
    //     Geolocation.getCurrentPosition(pos => {
    //         const crd = pos.coords
    //         // setLocation(crd)
    //         setModel({...model},crd)
            
            
    //     }
        
    //     )
    // }
    
    // useEffect(() => {
    //     getLiveLocation()
    // }, [])
    let AddToCart = () => {
        // setModel({...model},data)
        console.log(data)
        // model.id=database().ref('Item/').push().key
        let key=database().ref(`Item/`)
        let keys=key.push().key
        data.loc=keys
        // setModel()
        console.log(data)

        database().ref(`Item/${data.loc}`).set(data)
        .then((res)=>{
                console.log(res)
            Alert.alert("Your Order Succeed")
            navigation.navigate('home')
        })
        .catch((err)=>{
            console.log(err)
        })


        // database().ref(`location/${data.id}`).set(location)
        // .then((res)=>{
        //     console.log(res)
        //     Alert.alert("Your Order Succeed")
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }

    return (
        <BackGround>
            <View style={[styles.alignItemsCenter, { width: 360 }]}>
                <Text style={[styles.textWhite, { marginTop: 30, marginBottom: 20 }, styles.fs1]}>Product</Text>
                <View style={[styles.bgWhite,styles.alignItemsCenter,  { width: 360, height: 500, borderTopLeftRadius: 20, borderTopRightRadius: 20, },]}>
                    <View style={[styles.w75, styles.p1, { paddingTop: 20 }]}>
                        <View style={[styles.alignItemsCenter, { borderWidth: 2, }, styles.p1, styles.rounded]}>
                            <Image resizeMode='cover' source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg' }} style={[{ width: '100%', height: 300 },]} />
                            <View style={[styles.bgWhite, styles.alignItemsCenter, { width: '80%', height: 100 }]}>
                                
                                <Text     style={[
                                                styles.fs3,
                                                styles.textSecondary,
                                                styles.flexRow,
                                                styles.alignItemsCenter,
                                            ]}>Rs:{data.foodprice}/-</Text>
                            </View>

                        </View>
                                        <Btn btnLabel={"OrderNow"} onPress ={AddToCart}  bgColor={darkGreen} textColor='white'  />
                    </View>
                </View>
            </View>
        </BackGround>
    )
}