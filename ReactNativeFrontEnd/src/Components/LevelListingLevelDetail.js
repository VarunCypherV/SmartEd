import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TouchableOpacity as GestureHandlerTouchableOpacity} from 'react-native-gesture-handler';

const LevelListingLevelDetail = props => {
  const status=props.status;
  const fastestTime =props.fastestTime;
  const highestScore =props.highestScore;
  const leaderboardFastestTime =props.leaderboardFastestTime;
  const leaderboardHighestScore =props.leaderboardHighestScore;
  const level = props.level;
  const isLocked = status === 'Locked';
  
  
  return (
    <View style={[styles.mainContainer, isLocked && styles.lockedContainer]}>
      {isLocked && <View style={styles.overlay} />}
      <View style={isLocked ? styles.LeftLockedContainer : styles.leftContainer}>
        <Text style={styles.LevelText}>
          Level <Text>{level}</Text> {/* props.level */}
        </Text>
        <TouchableOpacity disabled={isLocked} style={styles.Button}>
          {status === 'UnlockedNotDone' || isLocked ? (
            <Text style={styles.ButtonText}>    Play    </Text>
          ) : status === 'UnlockedDone' ? (
            <Text style={styles.ButtonText}>Play Again</Text>
          ) : null}
        </TouchableOpacity>
      </View>

      {/* API Fetch Details */}
      {status === 'UnlockedNotDone' ? (
        <View style={styles.rightContainer}>
          <Text>
            Highest Score : <Text style={styles.highlight}>0</Text>
          </Text>
          <Text>
            Fastest Time : <Text style={styles.highlight}>0</Text>
          </Text>
          <Text>
            Leaderboard Highest Score :{' '}
            <Text style={styles.highlight}>120</Text>
          </Text>
          <Text>
            Leaderboard Fastest Time :{' '}
            <Text style={styles.highlight}>1m20s</Text>
          </Text>
        </View>
      ) : status === 'UnlockedDone' ? (
        <View style={styles.rightContainer}>
          <View style={styles.rightContainer}>
            <Text style={styles.RightContainerText}>
              Highest Score : <Text style={styles.highlight}>120</Text>
            </Text>
            <Text style={styles.RightContainerText}>
              Fastest Time : <Text style={styles.highlight}>1m20s</Text>
            </Text>
            <Text style={styles.RightContainerText}>
              Leaderboard Highest Score :{' '}
              <Text style={styles.highlight}>120</Text>
            </Text>
            <Text style={styles.RightContainerText}>
              Leaderboard Fastest Time :{' '}
              <Text style={styles.highlight}>1m20s</Text>
            </Text>
          </View>
        </View>
      ) : status === 'Locked' ? (
        <View style={styles.rightLockedContainer}>
          <Text style={styles.LockedText}>LOCKED</Text>
        </View>
      ) : null}
    </View>
  );
};

export default LevelListingLevelDetail;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFCAD',
    flex: 1,
    flexDirection: 'row',
    position: 'relative', 
    margin:10,
    borderRadius:20,
    maxHeight:120,
    minHeight:120,
    shadowColor: 'black',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 16,
  },
  lockedContainer: {
    // No change in background color
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // To cover the entire container
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black overlay
    borderRadius:20
  },
  leftContainer: {
    flex: 1,
    margin: 5,
    alignItems:"center",
    justifyContent:"center",
  },
  LeftLockedContainer : {
    flex: 1,
    margin: 5,
    alignItems:"center",
    justifyContent:"center",
    opacity:0.5
  },
  rightContainer: {
    flex: 2,
    fontFamily: 'Roboto',
    margin: 5,
    alignItems:"flex-start",
    justifyContent:"center",
    
  },
  Button: {
    backgroundColor: '#FF1654',
    marginTop:10,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:20,    
  },
  ButtonText:{
    color:"white",
    fontSize:12
  },
  LevelText: {
    color: '#FF1654',
    fontSize: 20,
    fontFamily:"Kavoon"
  },
  rightLockedContainer : {
    alignItems:"center",
    justifyContent:"center",
    flex:2
  },
  RightContainerText : {
    textAlign:"left"
  },
  LockedText : {
    color:"#CFFCFF",
    fontSize:32,
  }
});
