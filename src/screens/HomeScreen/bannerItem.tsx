import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Banner } from '../../data/interfaces';
import { Routes } from '../../navigation/routes.types';


interface Props {
  item: Banner,
}


export const BannerItem: React.FC<Props> = (props) => {
  const {
    item,
  } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(Routes.VideoScreen as never)}
    >
      {
        item?.imageUrl &&
        <ImageBackground
          source={item?.imageUrl}
          style={styles.image}
        >
          <Text style={styles.genre}>
            {item?.title && item?.genre?.toUpperCase()}
          </Text>
          <Text style={styles.title}>
            {item?.title && item?.title}
          </Text>
          <Text style={styles.editor}>
            {item?.title && item?.editor}
          </Text>
        </ImageBackground>
      }

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 216,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  genre: {
    fontWeight: '700',
    fontSize: 11,
    lineHeight: 21,
    color: '#F5F5F5',
    padding: 6,
    backgroundColor: '#0F0F0F',
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  title: {
    marginTop: 'auto',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    color: '#F2F3F5',
  },
  editor: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '400',
    color: '#C4C8CC',
  }
});