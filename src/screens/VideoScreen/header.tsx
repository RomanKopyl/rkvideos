import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { gradientDataTop } from '../../constants';

interface Props {
  title?: string
  onPress?: () => void
}

export const Header: React.FC<Props> = (props) => {
  const {
    title,
    onPress,
  } = props;

  const navigation = useNavigation();

  const onClosePress = () => {
    onPress?.();
    navigation.goBack();
  };


  return (
    <LinearGradient
      colors={gradientDataTop}
      style={styles.topGradient}
    >
      <TouchableOpacity
        style={styles.closeButton}
        onPress={onClosePress}
      >
        <Image
          source={require('../../images/close.png')}
          style={styles.closeImage}
        />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.headerText}>
          {
            title != null ? title : 'RKChat'
          }
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  topGradient: {
    minHeight: 48,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    top: 0,
  },
  closeButton: {
    position: 'absolute',
    left: 0,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  closeImage: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 26,
    fontWeight: '400',
    alignSelf: 'center',
    color: '#fff',
    paddingVertical: 5,
  },
});