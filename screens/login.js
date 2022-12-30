import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from '../style/style'
import SMInput from '../components/smInput'
import Btn from '../components/btn'
import { darkGreen } from '../style/color'
import BackGround from '../components/background'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


export default function Login({navigation,route}) {
    // const [moda]
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    
    console.log(route.params)
    let loginUser=()=>{
      // if(!(email&&password)){
      //  Alert.alert("Please Login") 
      // }
      // else{


        

        auth()
        // .signInWithEmailAndPassword(email, password)
        .signInWithEmailAndPassword('abc@gmail.com', '123456')
        
        .then(res => {
          let dbRef=database().ref(`appUsers/${res.user.uid}`)
          dbRef.once('value', snapshot => {
            let items = Object.values(snapshot.val())
            // let data=items.pull(category)
            const obj = Object.assign({}, items)
            // console.log(Object.keys(snapshot.val()))
            console.log(obj[5])
        })
          navigation.navigate('home',res.user.uid)
        })
        .catch(err => {
          console.log(err);
          Alert.alert('Create Account');
        });
        
      } 
      // }

  
  return (
    <BackGround>
      <View style={[styles.alignItemsCenter, { width: 360 }]}>
        <Text style={{ color: 'white', fontSize: 44, fontWeight: 'bold', marginVertical: 40 }}>Login</Text>
        <View style={[styles.bgWhite, styles.alignItemsCenter, { width: 350, height: 700, borderTopLeftRadius: 60, borderTopRightRadius: 60, paddingTop: 100 }]}>
          <Text style={{ fontSize: 30, color: darkGreen, fontWeight: 'bold', marginBottom: 10 }}>Welcome Back</Text>
          <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold', marginBottom: 40 }}>Login to your account</Text>
          <SMInput placeholder="Email / Username"  
          
            keyboardType={'email-address'} onChangeText={(e)=>setEmail(e)} />
          <SMInput placeholder='Password' onChangeText={(e)=>setPassword(e)}  value={password} keyboardType={'number'} secureTextEntry={true}  />
          <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: darkGreen }}>Forgot Password</Text>
          </View>
          <Btn btnLabel='Login' bgColor={darkGreen} textColor='white' onPress={loginUser} />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text style={{ color: darkGreen, fontSize: 16, fontWeight: 'bold' }} >Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BackGround>
  )
}