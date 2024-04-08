import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Poster } from '../../data/interfaces';
import { Routes } from '../../navigation/routes.types';


interface Props {
  item: Poster,
}


export const SectionItem: React.FC<Props> = (props) => {
  const {
    item,
  } = props;
  const navigation = useNavigation();

  const onPress = () => {
    if (item?.message) return;
    
    navigation.navigate(Routes.VideoScreen as never)
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        {
          item.imageUrl &&
          <ImageBackground
            style={styles.image}
            source={item.imageUrl}
            blurRadius={item?.message ? 40 : 0}
          >
            {
              item?.message &&
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <View style={styles.lockContainer}>
                </View>
                <Image
                  source={require('../../images/lock.png')}
                  style={styles.lock}
                />
              </View>
            }
          </ImageBackground>
        }
      </View>
      {
        item?.message &&
        <Text style={styles.date}>
          {item?.message}
        </Text>
      }
      {
        item?.title &&
        <Text style={styles.title}>
          {item?.title && item?.title}
        </Text>
      }

    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  container: {
    height: 209,
    width: 120,
    marginRight: 12,
  },
  imageContainer: {
    width: 120,
    height: 150,
    marginRight: 12,
    marginBottom: 4
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  lockContainer: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    opacity: 0.32,
  },
  lock: {
    width: 20,
    height: 21,
  },
  date: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
    color: '#00BFE5',
    marginTop: 4,
  },
  title: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '500',
    color: 'white',
    marginTop: 4,
  }
});