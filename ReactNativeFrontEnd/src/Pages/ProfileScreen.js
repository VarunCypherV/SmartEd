import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.HeaderContainer}>
        <View style={styles.NameAndAvatarContainer}>
          <Avatar.Image
            size={60}
            source={require('../Assests/ProfileImages/kid.jpg')}
            
          />
          <Text>Hi Blake Jamali</Text>
        </View>
        <View style={styles.linevector}>
          <Image source={require('../Assests/ProfileImages/vectorline.png')} 
            style={{ width: '100%', resizeMode: 'stretch' }}
          />
        </View>
      </View>

      <View style={styles.FormContainer}>
        <Text>Hi Blake Jamali</Text>
      </View>
      <View style={styles.DetailsContainer}>
        <Text>Hi Blake Jamali</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FF5000',
  },
  HeaderContainer:{
    flex:1,
    flexDirection:"column",
    backgroundColor: 'green',
  },
  NameAndAvatarContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:"center"
  },
  linevector:{
    alignItems:"center",
    resizeMode: 'stretch',
    width:"100%"
  },
  FormContainer: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  DetailsContainer: {
    flex: 3,
    backgroundColor: 'blue',
  },
});
