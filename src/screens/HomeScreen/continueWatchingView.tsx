
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ContinueWatching } from '../../data/interfaces';
import { Routes } from '../../navigation/routes.types';


interface Props {
  style?: ViewStyle,
  title?: string,
  data?: ContinueWatching,
}

export const ContinueWatchingView: React.FC<Props> = (props) => {
  const { style = [], title, data } = props;

  const navigation = useNavigation();

  return (
    <View style={{ ...styles.container, ...style }}>

      {
        title &&
        <Text style={styles.headerText}>
          {title}
        </Text>
      }

      <TouchableOpacity
        style={styles.dataContainer}
        onPress={() => {
          navigation.navigate({
            name: Routes.VideoScreen,
            params: { isContinueExist: true },
          } as never);
        }}
      >
        <Image
          source={data?.poster}
          style={styles.poster}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {
              data?.title
            }
          </Text>
          <Text style={styles.subTitle}>
            {
              data?.subTitle
            }
          </Text>
        </View>
        <View
          style={styles.forwardContainer}>
          <Image
            source={require('../../images/forward.png')}
            style={styles.forwardImage}
          />
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 44,
  },
  headerText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  dataContainer: {
    marginTop: 16,
    backgroundColor: '#3598D0',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 6,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  poster: {
    width: 44,
    height: 56,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    color: '#EBEDF0',
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: '#E1E3E6',
  },
  forwardContainer: {
    width: 8,
    height: 16,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forwardImage: {
    width: 8,
    height: 16,
  },
});