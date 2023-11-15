import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


const RegisterScreen = (props) => {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5050/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      }).then(res => res.json())
        .then(async (data) => {
          try {
            await AsyncStorage.setItem('token', data.token)
          } catch (e) {
            console.log('error:', e)
          }
        })

      //   const data = await response.json();

      //   if (response.ok) {
      //     Alert.alert('Success', 'Registration successful!');
      //     navigation.navigate(LoginScreen);
      //   } else 
      //     Alert.alert('Error', data);
      //   }
      // } catch (error) {
      //   console.error('Error:', error);
    }
  }


  return (
    <View style={styles.parent}>
      <LinearGradient colors={['#FF4500', '#FF7B1C']} style={styles.container1}>
        <View style={styles.textContainer}>
          <Text style={styles.sunsetText}>SmartEducation!</Text>
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
          <Text style={styles.headerText}>Register</Text>
          <TextInput
            label
            style={styles.input}
            placeholder="username"
            placeholderTextColor="#888"
          />
          <TextInput
            label='email'
            value={email}
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#888"
            onChangeText={(text) => setEmail(text)}
          />
          {/* <TextInput
            style={styles.input}
            placeholder="DOB"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#888"
          /> */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            placeholderTextColor="#888"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.buttonsparent}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.regButton} onPress={() => handleRegister()}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#FF7B1C',
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
    color: '#FF7B1C',
    fontSize: 40,
    fontFamily: 'Monospace',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  loginButton: {
    backgroundColor: '#FF7B1C',
    marginLeft: 30,
    marginRight: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
    flex: 1,
  },
  regButton: {
    backgroundColor: '#FF7B1C',
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
    maxWidth: 60,
    maxHeight: 60,
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

export default RegisterScreen;
