
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StackNavigation } from '../navigation/RootNavigator';



export const LoadingScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigation>();

  useEffect(() => {
    navigation.replace('HomeScreen');
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