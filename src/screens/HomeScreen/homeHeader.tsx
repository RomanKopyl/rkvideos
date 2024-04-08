import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export const HomeHeader: React.FC = () => {

  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>
        Home
      </Text>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TouchableOpacity
          style={{
            // left: 0,
            // paddingVertical: 12,
            // paddingHorizontal: 16,
          }}
          onPress={() => Alert.alert('Realize soon')}
        >
          <Image
            source={require('../../images/prize.png')}
            style={{
              width: 45,
              height: 43,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
          onPress={() => Alert.alert('Realize soon')}
        >
          <Image
            source={require('../../images/search.png')}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
  },
  headerText: {
    fontSize: 26,
    fontWeight: '400',
    alignSelf: 'center',
    color: '#fff',
    paddingVertical: 5,
  },
});