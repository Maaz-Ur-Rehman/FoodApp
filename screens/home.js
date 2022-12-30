import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackGround from '../components/background'
import styles from '../style/style'
import Btn from '../components/btn'
import RegisterItem from './RegisterItem'
import { darkGreen } from '../style/color'
import database from '@react-native-firebase/database';





export default Home = ({ navigation }) => {
  const [list, setList] = useState([])

  let RegisterItem = () => {
    navigation.navigate('item')

  }
  let foodGetData = () => {
    database().ref('food').once('value', snapshot => {
      let li = Object.values(snapshot.val())
      // console.log(li)
      setList([...li])
      // console.log(Object.values(snapshot.val()))
      // console.log(list)
    })
  }
  useEffect(() => {
    foodGetData()
  }, [])
  let move=e=>{
    console.log(e)
    let obj = {
      foodname: e.foodName,
      foodprice: e.foodPrice
    }
    navigation.navigate('product',obj)
  }  

    return (
      <BackGround>
        <View style={[styles.alignItemsCenter, { width: 360 }]}>

          <Text style={[styles.textWhite, { marginTop: 30, marginBottom: 20 }, styles.fs1]}>Availabe products</Text>
          <View style={[styles.bgWhite, { width: 360, height: 700, borderTopLeftRadius: 20, borderTopRightRadius: 20, },]}>
            <View style={[styles.alignItemsCenter, styles.w100]}>
            <Btn btnLabel="Order Loc" bgColor={darkGreen} onPress={()=>navigation.navigate('orderLoc')} textColor='white' />

              <Btn btnLabel="Add Food" bgColor={darkGreen} onPress={RegisterItem} textColor='white' />
            </View>

            <ScrollView>

              <View style={[styles.w100, styles.p1, { height: '100%', paddingTop: 20 }, styles.flexRow, styles.flexWrap, styles.justifyContentAround]}>

                {list.map((e, i) => {
                  return <TouchableOpacity onPress={() => move(e)} key={i} style={[
                    styles.rounded,
                    { width: '45%', borderWidth: 1 },
                    styles.mb3,
                    styles.p2

                  ]}>
                    <Image resizeMode='cover' source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg' }} style={[{ width: '100%', height: 100 },]} />
                    <View style={[styles.alignItemsCenter, { backgroundColor: 'white', }]}>
                      <Text numberOfLines={1} style={[styles.fs4, styles.textBlack, { paddingHorizontal: 10 }]}>{e.foodName}</Text>
                      <Text style={[styles.textDanger, styles.fs5, { paddingHorizontal: 10 }]}>Rs:{e.foodPrice}</Text>
                    </View>
                  </TouchableOpacity>
                })

                }
              </View>
            </ScrollView>
          </View>
        </View>
      </BackGround>
    )
  }


