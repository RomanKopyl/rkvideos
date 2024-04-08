import React from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { Banner } from '../../data/interfaces';
import { BannerItem } from './bannerItem';

interface Props {
  style?: ViewStyle,
  title?: string,
  list?: Banner[],
}

export const BannerView: React.FC<Props> = (props) => {
  const { style = [], title, list } = props;

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ marginTop: 12 }}
        horizontal={true}
      >

        {/* Pagination left block */}
        <View style={{ width: 16, backgroundColor: 'transparent' }}></View>
        {
          // TODO: to Flatlist + pagination
          list && list.map((item, index) => {

            return (
              <BannerItem
                key={index.toString()}
                item={item}
              />
            )
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'white',
    lineHeight: 24,
    fontWeight: '700',
    // fontFamily: Nani TODO:
    paddingLeft: 24,
  },
});