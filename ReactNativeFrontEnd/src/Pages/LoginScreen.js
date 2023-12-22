import React, { useState } from 'react';
import {
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = (props) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log("sendingLogin:", JSON.stringify({ usernameOrEmail, password }))
      const response = await fetch('http://192.168.0.105:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usernameOrEmail, password }),
      }).then(res => res.json())
        .then(async (data) => {
          try {
            await AsyncStorage.setItem('token', data.token)
            props.navigation.replace("Home")
          } catch (e) {
            console.log("error hai", e)
            Alert(e)
          }
        });

      const data = await response.json();

      if (response.ok) {
        AsyncStorage.setItem('token', data.token);
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Error', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.parent}>
      <LinearGradient colors={['#FF1654', '#FF5000']} style={styles.container1}>
        <View style={styles.textContainer}>
          <Text style={styles.sunsetText}>Smart Education!</Text>
        </View>
        <View style={styles.imagesParent}>
          <View style={[styles.image, styles.image1]}>
            <Image
              source={require('../Assests/loginImages/p5.png')}
              style={styles.image}
            />
          </View>
          <View style={[styles.image, styles.image2]}>
            <Image
              source={require('../Assests/loginImages/p9.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.image}>
            <Image
              source={require('../Assests/loginImages/p4.png')}
              style={styles.image}
            />
          </View>
          <View style={[styles.image, styles.image3]}>
            <Image
              source={require('../Assests/loginImages/p8.png')}
              style={styles.image}
            />
          </View>
          <View style={[styles.image, styles.image4]}>
            <Image
              source={require('../Assests/loginImages/p7.png')}
              style={styles.image}
            />
          </View>
        </View>

      </LinearGradient>

      <View style={styles.container2Wrapper}>
        <View style={styles.container2}>
          <Text style={styles.headerText}>Login</Text>
          <View style={styles.inputContainer}>
            <Image source={require('../Assests/loginImages/User.png')} />
            <TextInput
              style={styles.input}
              placeholder="Username or Email"
              placeholderTextColor="white"
              label='usernameOrEmail'
              value={usernameOrEmail}
              onChangeText={(text) => setUsernameOrEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label='password'
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonsparent}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText} onPress={() => handleLogin(props)}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.regButton}>
              <Text style={styles.buttonText} onPress={() => props.navigation.navigate("register")}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
//STYLESHEET======================================================
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#FF5000',
  },
  container1: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2Wrapper: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    overflow: 'hidden',
  },
  container2: {
    width: '80%',
    textAlign: 'center',
    alignItems: 'center',
  },
  sunsetText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Monospace',
    fontWeight: 'bold',
  },
  headerText: {
    color: '#FF5000',
    fontSize: 40,
    fontFamily: 'Monospace',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 0.5,
    paddingLeft: 15,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#FF81486b'
  },
  input: {
    flex: 1
    // width: '100%',
    // height: 40,
    // borderRadius: 20,
    // padding: 10,
    // paddingLeft: 20,
    // backgroundColor: 'white',
  },
  loginButton: {
    backgroundColor: '#FF5000',
    marginLeft: 30,
    marginRight: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
    flex: 1,
  },
  regButton: {
    backgroundColor: '#FF5000',
    marginLeft: 10,
    marginRight: 40,
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonsparent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imagesParent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    maxWidth: 50,
    maxHeight: 55,
  },

  image1: {
    position: 'relative',
    top: '12%',
    marginRight: 15,
    transform: [{ rotate: '-50deg' }],
  },

  image2: {
    position: 'relative',
    top: '3%',
    marginRight: 15,
    transform: [{ rotate: '-10deg' }],
  },

  image3: {
    position: 'relative',
    top: '3%',
    marginLeft: 15,
    transform: [{ rotate: '15deg' }],
  },

  image4: {
    position: 'relative',
    top: '12%',
    transform: [{ rotate: '180deg' }],
    marginLeft: 15,
  },
});

export default LoginScreen;
