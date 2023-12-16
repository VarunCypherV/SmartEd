import {StyleSheet, Text, View} from 'react-native';
import VerticalLine from '../Components/verticalLine';
import {ScrollView} from 'react-native-gesture-handler';
import LevelListingLevelDetail from '../Components/LevelListingLevelDetail';
import {Image} from 'react-native';

const LevelListingScreen = () => {
  const jsondata = {
    levels: [
      {
        level: 1,
        status: 'UnlockedDone',
        highestScore: 345,
        fastestTime: '1m 30s',
        leaderboardHighestScore: 'Player1',
        leaderboardFastestTime: 'Player2',
      },
      {
        level: 2,
        status: 'UnlockedDone',
        highestScore: 420,
        fastestTime: '1m 20s',
        leaderboardHighestScore: 'Player3',
        leaderboardFastestTime: 'Player4',
      },
      {
        level: 3,
        status: 'UnlockedDone',
        highestScore: 500,
        fastestTime: '1m 10s',
        leaderboardHighestScore: 'Player5',
        leaderboardFastestTime: 'Player6',
      },
      {
        level: 4,
        status: 'UnlockedDone',
        highestScore: 600,
        fastestTime: '1m 5s',
        leaderboardHighestScore: 'Player7',
        leaderboardFastestTime: 'Player8',
      },
      {
        level: 5,
        status: 'UnlockedNotDone',
        highestScore: 0,
        fastestTime: '-',
        leaderboardHighestScore: '-',
        leaderboardFastestTime: '-',
      },
      {
        level: 6,
        status: 'Locked',
        highestScore: 0,
        fastestTime: '-',
        leaderboardHighestScore: '-',
        leaderboardFastestTime: '-',
      },
      {
        level: 7,
        status: 'Locked',
        highestScore: 0,
        fastestTime: '-',
        leaderboardHighestScore: '-',
        leaderboardFastestTime: '-',
      },
      {
        level: 8,
        status: 'Locked',
        highestScore: 0,
        fastestTime: '-',
        leaderboardHighestScore: '-',
        leaderboardFastestTime: '-',
      },
      {
        level: 9,
        status: 'Locked',
        highestScore: 0,
        fastestTime: '-',
        leaderboardHighestScore: '-',
        leaderboardFastestTime: '-',
      },
      {
        level: 10,
        status: 'Locked',
        highestScore: 0,
        fastestTime: '-',
        leaderboardHighestScore: '-',
        leaderboardFastestTime: '-',
      },
    ],
  };
  const getCircleColor = status => {
    switch (status) {
      case 'Locked':
        return '#FF1654';
      case 'UnlockedNotDone':
        return '#FFFCAD';
      case 'UnlockedDone':
        return '#9DFB40';
      default:
        return 'transparent';
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Drawing 1: Select The Level</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.LevelProgressContainer}>
          <View style={styles.Linecontainer}>
            <View style={styles.verticalLine}>
              <VerticalLine color="white" />
            </View>
            <View style={styles.circleParentContainer}>
            {jsondata.levels.map(item => (
              <View key={item.level} style={styles.circleContainer}>
                <Image
                  source={require('../Assests/ProgressBar/circle.png')} // Replace with your circle image path
                  style={[
                    styles.circleImage,
                    {tintColor: getCircleColor(item.status)},
                  ]}
                />
              </View>
            ))}
            </View>
            
          </View>
          <View style={styles.Levelcontainer}>
            {jsondata.levels.map(item => (
              <LevelListingLevelDetail
                key={item.level}
                level={item.level}
                status={item.status}
                highestScore={item.highestScore}
                fastestTime={item.fastestTime}
                leaderboardFastestTime={item.leaderboardFastestTime}
                leaderboardHighestScore={item.leaderboardHighestScore}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LevelListingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FF5000',
  },
  header: {
    minHeight: '25%',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#FFFCAD',
    fontSize: 30,
  },
  scrollView: {
    flexGrow: 1,
  },
  Linecontainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the start (top) of the container
    justifyContent: 'center',
    flex: 1,
  },
  Levelcontainer: {
    flex: 3,
  },
  LevelProgressContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 4,
  },
  circleContainer: {
    position: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20, // Set width and height according to your circle image size
    height: 20,
    zIndex: 1, // Adjust as needed based on overlapping elements
    margin:59,
    
    
  },
  circleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  verticalLine: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    bottom: 0,
    flex: 1,
    minHeight: '100%',
  },
  circleParentContainer:{
    padding: 10,
    
  }

});
