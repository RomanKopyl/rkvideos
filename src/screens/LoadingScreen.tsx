
import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Routes } from '../navigation/routes.types';


export const LoadingScreen: React.FC = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Routes.HomeScreen as never);
    }, 1000);
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={'large'} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darker,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});