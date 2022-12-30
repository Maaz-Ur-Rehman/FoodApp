import { View, Text } from 'react-native'
import React from 'react'
import BackGround from '../components/background'
import Btn from '../components/btn'
import styles from '../style/style'
import { darkGreen, green } from '../style/color'


export default function Start({navigation}) {
    return (
      <BackGround>
  
      <View style={{height:'100%',marginHorizontal:40,marginVertical:100}}  >
  
              <Text style={[styles.textWhite,{fontSize:54}]}>Let's Start</Text>
              <Text style={[styles.textWhite,{fontSize:54,marginBottom:70},]}>Coding</Text>
      <Btn  bgColor={green}  textColor='white' btnLabel='Login' onPress={()=>navigation.navigate('login')}  />
      <Btn  bgColor='white'  textColor={darkGreen} btnLabel='Signup'  onPress={()=>navigation.navigate('signup')}  />
  
      </View>
        </BackGround>
    )
  }