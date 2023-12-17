import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function ProfileScreenOld() {
  return (
    <View style={styles.parent}>
      <View style={styles.pfptextcontainer}>
      
        <View style={styles.pfptextboxcontainer}>
          <Text style={styles.pfptext}>Profile</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../Assests/ProfileImages/paratroopertr.png')}
            style={styles.image}
          />
        </View>
        <View styles={styles.imageContainer}>
          <Image
            source={require('../Assests/ProfileImages/paratroopertr.png')}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profileBoxContainer}>
        
        <View style={styles.imagesSection}>
            <Image
              source={require('../Assests/ProfileImages/superkidtras.png')}
              style={[styles.leftImage, {resizeMode: 'contain'}]}
            />
            <View style={styles.avatarContainer}>
              <TouchableOpacity>
                <Image
                  source={require('../Assests/ProfileImages/kid.jpg')}
                  style={[styles.avatarImage, {resizeMode: 'contain'}]}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require('../Assests/ProfileImages/superkidtras.png')}
              style={[styles.rightImage, {resizeMode: 'contain'}]}
            />
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.row}>
            <View style={styles.rowIcon}>
              <Text>Icon</Text>
            </View>
            <View style={styles.rowTitleValue}>
              <Text style={styles.title}>Name</Text>
              <Text style={styles.value}>John Doe</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>

          <View style={styles.row}>
            <View style={styles.rowIcon}>
              <Text>Icon</Text>
            </View>
            <View style={styles.rowTitleValue}>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.value}>john.doe@example.com</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>

          <View style={styles.row}>
            <View style={styles.rowIcon}>
              <Text>Icon</Text>
            </View>
            <View style={styles.rowTitleValue}>
              <Text style={styles.title}>Id</Text>
              <Text style={styles.value}>Xadjfs</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>

          <View style={styles.row}>
            <View style={styles.rowIcon}>
              <Text>Icon</Text>
            </View>
            <View style={styles.rowTitleValue}>
              <Text style={styles.title}>Age</Text>
              <Text style={styles.value}>12</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>

          <View style={styles.row}>
            <View style={styles.rowIcon}>
              <Text>Icon</Text>
            </View>
            <View style={styles.rowTitleValue}>
              <Text style={styles.title}>DOB</Text>
              <Text style={styles.value}>12-03-2008</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>

          <View style={styles.row}>
            <View style={styles.rowIcon}>
              <Text>Icon</Text>
            </View>
            <View style={styles.rowTitleValue}>
              <Text style={styles.title}>Points</Text>
              <Text style={styles.value}>120</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>

          <View style={styles.row}>
            <View style={styles.rowIcon}>
              <Text>Icon</Text>
            </View>
            <View style={styles.rowTitleValue}>
              <Text style={styles.title}>Rank</Text>
              <Text style={styles.value}>Good Boy</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FF7B1C',
  },
  pfptextcontainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pfptextboxcontainer: {
    marginLeft: 20,
  },
  pfptext: {
    color: 'white',
    fontSize: 36, // Increase the font size for emphasis
    fontWeight: 'bold', // Apply a bold style
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start', // Add this to align the image to the top
    marginRight: 20,
    marginTop: 20,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Ensure the entire image is visible while maintaining aspect ratio
    transform: [{scaleX: -1}],
  },
  profileContainer: {
    flex: 10,
  },
  profileBoxContainer: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 30,
    borderRadius: 20,
    flex: 1,
    elevation: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rowIcon: {
    flex: 1,
    paddingRight: 5,
  },
  rowTitleValue: {
    flex: 7,
    flexDirection: 'column',
    marginLeft: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '300',
    color: '#ff9248',
  },
  value: {
    fontSize: 16,
    color: '#ff9248',
    fontWeight: '400',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    marginVertical: 10,
  },
  imagesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  leftImage: {
    width: 100,
    height: 100,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  rightImage: {
    width: 100,
    height: 100,
    transform: [{scaleX: -1}],
  },
});
