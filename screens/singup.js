import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackGround from '../components/background'
import Btn from '../components/btn'
import { darkGreen } from '../style/color'
import SMInput from '../components/smInput'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


export default function SignUp({navigation}) {
    const [modal,setModal]=useState({})
  let signUpUser=()=>{
    // Alert.alert("Register Your Account")
  auth().createUserWithEmailAndPassword(modal.email, modal.password)
  .then((res)=>{
    // console.log(res);
        // console.log(res.user.uid);
    database().ref(`appUsers/${res.user.uid}`).set(modal)
    .then(() => {
        navigation.navigate('login', res.user.uid);
        navigation.navigate('login', modal);

      })
      .catch(dbError => {
        console.log(dbError);
      });   
  })
  .catch((err)=>{
    console.log(err)
  })
// console.log(modal)
  }
  return (
    <BackGround>
      <View style={{alignItems:'center',width:360,}}>
      <Text style={{fontSize:54,color:'white',fontWeight:'bold',marginTop:30}}>Register</Text>
      <Text style={{fontSize:18,color:'white',fontWeight:'bold',marginBottom:15}}>Create a new account</Text>
      <View style={{backgroundColor:'white',width:360,height:700,alignItems:'center',paddingTop:20,borderTopLeftRadius:70,borderTopRightRadius:60,}}>
        <SMInput placeholder='First Name' keyboardType='name' onChangeText={(e)=>setModal({...modal,fName:e})} />
        <SMInput placeholder='Last Name' onChangeText={(e)=>setModal({...modal,lName:e})} />
        <SMInput placeholder='Email/Username' onChangeText={(e)=>setModal({...modal,email:e})} />
        <SMInput placeholder='Contact No#' keyboardType={'number'} onChangeText={(e)=>setModal({...modal,num:e})} />
        <SMInput placeholder='Password' keyboardType={'number'} secureTextEntry={true} onChangeText={(e)=>setModal({...modal,password:e})} />
        <SMInput placeholder='Category' keyboardType={'name'}  onChangeText={(e)=>setModal({...modal,category:e})} />
        <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '75%',
              paddingRight: 96
            }}>
            <Text style={{color: 'grey', fontSize: 13}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 13}}>Terms & Condition</Text>
          </View>
           <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"flex-start",
              width: '78%',
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 13}}>
              and {" "}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 13}}>
              Privacy Policy
            </Text>
          </View> 
          {/* onPress={()=>{
            Alert.alert("Register Your Account")
            props.navigation.navigate('login')
          }} */}
          <Btn btnLabel={"Signup"} bgColor={darkGreen} textColor='white' onPress={signUpUser}  />
           <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

      </View>
      </View>
      {/* <AppLoader /> */}
      
    </BackGround>
  )
}