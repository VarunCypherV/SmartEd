import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'

export default function ProfileScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.HeaderContainer}>
        <LinearGradient colors={['#FF1654', '#FF5000']} style={styles.container1}>
          <View style={styles.NameAndAvatarContainer}>
            <Avatar.Image
              size={80}
              source={require('../Assests/ProfileImages/kid.jpg')}
              style={styles.avatar}

            />
            <Text style={styles.headerText}>Hi Blake RavenCock</Text>
          </View>
          <View style={styles.linevector}>
            <Image source={require('../Assests/ProfileImages/vectorline.png')}
              style={{ width: '100%', resizeMode: 'stretch' }}
            />
          </View>
        </LinearGradient>

      </View>

      <View style={styles.FormContainer}>
        <View style={styles.textContainerWrapper}>
          <Text style={styles.headerText}>Username</Text>
          <View style={styles.textContainer}>
            <Image source={require('../Assests/ProfileImages/User.png')} style={styles.image} />
            <Text style={styles.contentText}>Blake RavenCock</Text>
          </View>
        </View>

        <View style={styles.textContainerDouble}>
          <View style={styles.textContainerWrapper}>
            <Text style={styles.headerText}>DOB</Text>
            <View style={styles.textContainer1}>
              <Image source={require('../Assests/ProfileImages/Date_range.png')} style={styles.image} />
              <Text style={styles.contentText}>03/03/23</Text>
            </View>
          </View>
          <View style={styles.textContainerWrapper}>

            <Text style={styles.headerText}>Age</Text>
            <View style={styles.textContainer1}>
              <Image source={require('../Assests/ProfileImages/User_fill_add.png')} style={styles.image} />
              <Text style={styles.contentText}>asfnaksf</Text>

            </View>
          </View>
        </View>

        <View style={styles.textContainerWrapper}>
          <Text style={styles.headerText}>Phone Number</Text>
          <View style={styles.textContainer}>
            <Image source={require('../Assests/ProfileImages/phone.png')} style={styles.image} />
            <Text style={styles.contentText}>+91 95660 48974</Text>

          </View>
        </View>
        <View style={styles.textContainerWrapper}>
          <Text style={styles.headerText}>Email</Text>
          <View style={styles.textContainer}>
            <Image source={require('../Assests/ProfileImages/E-mail.png')} style={styles.image} />
            <Text style={styles.contentText}>blakecocksucker@gmail.com</Text>

          </View>
        </View>
      </View>
      <View style={styles.DetailsContainer}>
        <View style={styles.detailRow}>
          <View style={styles.detailBox}>
            <Text style={styles.detailTextHeader}>Current Rank</Text>
            <Text style={styles.detailText}>IRON</Text>
          </View>
          <View style={styles.detailBox1}>
            <Text style={styles.detailTextHeaderRight}>Total Points</Text>
            <Text style={styles.detailTextRight}>123</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.detailBox}>
            <Text style={styles.detailTextHeader}>Leaderboard</Text>
            <Text style={styles.detailText}>#134</Text>
          </View>
          <View style={styles.detailBox1}>
            <Text style={styles.detailTextHeaderRight}>Total Levels</Text>
            <Text style={styles.detailTextRight}>12/30</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FF5000',
  },
  container1: {
    flex: 3,
    justifyContent: 'flex-end'

  },
  HeaderContainer: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: '#FF5000',
  },
  avatar: {
    marginRight: 5
  },
  NameAndAvatarContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'space-between',
    paddingHorizontal: 10

    // justifyContent:"center"
  },
  linevector: {
    alignItems: "center",
    resizeMode: 'stretch',
    width: "100%"
  },
  FormContainer: {
    flex: 3,
    backgroundColor: '#FF5000',
    padding: 25
  },
  textContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 5,
    paddingLeft: 10,
    marginVertical: 5,
    width: '100%',
    backgroundColor: 'white',
  },
  textContainerWrapper: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 15,
  },
  textContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 5,
    paddingLeft: 10,
    marginVertical: 5,
    width: '100%',
    backgroundColor: 'white',
  },
  textContainerDouble: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  image: {
    marginRight: 2.5
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  contentText: {
    fontWeight: 'bold',
    color: '#FF1654',
    flex: 1,
    textAlign: 'left'
  },
  DetailsContainer: {
    flex: 3,
    padding: 10,
    justifyContent: 'space-evenly'

  },
  detailBox: {
    backgroundColor: '#FFFCAD',
    borderRadius: 20,
    flex: 1,
    padding: 20,
    margin: 20
  },
  detailBox1: {
    backgroundColor: '#39AD48',
    borderRadius: 20,
    flex: 1,
    padding: 20,
    margin: 20
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  detailTextHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF1654',
    fontSize: 18,
    marginBottom: 10
  },
  detailTextHeaderRight: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    marginBottom: 10
  },
  detailText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF1654',
    fontSize: 32,
    marginBottom: 10

  },
  detailTextRight: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32,
    marginBottom: 10

  }
});
