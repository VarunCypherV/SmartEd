import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#FF1654', '#FF5000', '#FF5000', '#FF1654']}
      style={[styles.mainContainer, {flex: 1}]}>
      <View style={styles.hamburgerContainer}>
        <Image
          source={require('../Assests/HomePage/hamburger.png')} // Replace with your circle image path
          style={styles.HamburgerImage}
        />
      </View>
      <View style={styles.HiAndQuoteContainer}>
        <View style={styles.HiContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontFamily: 'Kavoon-Regular',
            }}>
            Hi <Text style={{color: '#FFFCAD'}}>Blake jamali</Text>
          </Text>
        </View>
        <View style={styles.QuoteContainer}>
          <View style={styles.QuoteBackground}>
            <Text style={styles.QuoteTitle}>Today's Quote</Text>
            <Text style={styles.QuoteText}>
              “Anyone who has never made a mistake has never tried anything
              new.”
            </Text>
            <Text style={styles.AuthorText}>- Internet Guy</Text>
          </View>
        </View>
      </View>

      <View style={styles.LearnContainer}>
        <Text style={styles.learnTogether}>Lets Learn Together</Text>
        <ScrollView>
          <View style={styles.LearnModesContainer}>
            {/* flex vertical */}
            <View style={styles.flexContent}>
              <View style={styles.Learnbox}>
                <Image source={require('../Assests/HomePage/draw.png')} />
                <View style={styles.textContainer}>
                  <Text style={styles.drawingTitle}>Drawing 1</Text>
                  <Text style={styles.drawingDescription}>
                    Draw the Image you see in your screen
                  </Text>
                </View>
              </View>

              <View style={styles.Learnbox}>
                <Image source={require('../Assests/HomePage/draw.png')} />
                <View style={styles.textContainer}>
                  <Text style={styles.drawingTitle}>Drawing 2</Text>
                  <Text style={styles.drawingDescription}>
                    Draw what you hear from the audio
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flexContent}>
              <View style={styles.Learnbox}>
                <Image source={require('../Assests/HomePage/draw.png')} />
                <View style={styles.textContainer}>
                  <Text style={styles.drawingTitle}>Drawing 3</Text>
                  <Text style={styles.drawingDescription}>
                    Draw the Word given in your screen
                  </Text>
                </View>
              </View>

              <View style={styles.Learnbox}>
                <Image source={require('../Assests/HomePage/draw.png')} />
                <View style={styles.textContainer}>
                  <Text style={styles.drawingTitle}>Speaking 1</Text>
                  <Text style={styles.drawingDescription}>
                    Read out loud the words given on your screen
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flexContent}>
              <View style={styles.Learnbox}>
                <Image source={require('../Assests/HomePage/draw.png')} />
                <View style={styles.textContainer}>
                  <Text style={styles.drawingTitle}>Speaking 2</Text>
                  <Text style={styles.drawingDescription}>
                    Name the image given on ur screen
                  </Text>
                </View>
              </View>

              <View style={styles.Learnbox}>
                <Image source={require('../Assests/HomePage/draw.png')} />
                <View style={styles.textContainer}>
                  <Text style={styles.drawingTitle}>Speaking 3</Text>
                  <Text style={styles.drawingDescription}>
                    Say aloud whatever you hear from the sound
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flexContent}>
              <View style={styles.Learnbox}>
                <Image source={require('../Assests/HomePage/draw.png')} />
                <View style={styles.textContainer}>
                  <Text style={styles.drawingTitle}>Writing 1</Text>
                  <Text style={styles.drawingDescription}>
                    Draw the Image you see in your screen
                  </Text>
                </View>
              </View>

              <View style={styles.Learnbox}>
                <Image source={require('../Assests/HomePage/draw.png')} />
                <View style={styles.textContainer}>
                  <Text style={styles.drawingTitle}>Writing 2</Text>
                  <Text style={styles.drawingDescription}>
                    Draw the Image you see in your screen
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flexContent}>
              <View style={styles.Learnbox}>
                <Image source={require('../Assests/HomePage/draw.png')} />
                <View style={styles.textContainer}>
                  <Text style={styles.drawingTitle}>Writing 3</Text>
                  <Text style={styles.drawingDescription}>
                    Draw the Image you see in your screen
                  </Text>
                </View>
              </View>

              {/* <View style={styles.Learnbox}>
                <Image source={require('../Assests/HomePage/draw.png')} />
                <View style={styles.textContainer}>
                  <Text style={styles.drawingTitle}>Drawing 1</Text>
                  <Text style={styles.drawingDescription}>
                    Draw the Image you see in your screen
                  </Text>
                </View>
              </View> */}
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
  },
  hamburgerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  HamburgerImage: {
    // Add styles for the hamburger image if needed
  },
  HiAndQuoteContainer: {
    flex: 3,
    marginHorizontal: 20,
    marginVertical: 10,
    // backgroundColor:"green"
  },
  LearnContainer: {
    flex: 7,
  },
  HiContainer: {
    // Add styles for the HiContainer if needed
  },
  QuoteContainer: {
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4, // Adjust this value to control the shadow's bottom offset
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 0,
    overflow: 'hidden',
    padding: 6,
  },
  QuoteBackground: {
    backgroundColor: 'rgba(207,252,255,0.14)', // Add your desired background color
    padding: 15,
  },
  QuoteTitle: {
    fontSize: 13,
    fontFamily: 'Kavoon-Regular',
    opacity: 0.8,
    color: 'white',
    marginBottom: 8,
  },
  QuoteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Kavoon-Regular',
  },
  AuthorText: {
    color: '#FFFCAD',
    marginTop: 8,
    textAlign: 'right',
    fontFamily: 'Kavoon-Regular',
  },
  LearnModesContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  flexContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    // flexWrap:"wrap"
  },
  Learnbox: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFCAD',
    flexWrap: 'wrap',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'space-evenly',
    flexDirection:"column"
  },
  drawingTitle: {
    // Add styles for drawingTitle if needed
    fontSize: 14,
    fontFamily: 'Kavoon-Regular',
    color: '#FF5000',
    flex:1
  },
  drawingDescription: {
    // Add styles for drawingDescription if needed
    fontSize: 12,
    fontFamily: 'Kavoon-Regular',
    color: '#FF1654',
    flex:2
  },
  learnTogether: {
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 22,
    color: 'white',
    fontFamily: 'Kavoon-Regular',
  },
});

export default HomeScreen;
