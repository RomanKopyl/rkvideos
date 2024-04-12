import React from 'react';
import { FlatList, StyleSheet, View, ViewStyle } from 'react-native';
import { Banner } from '../../data/interfaces';
import { BannerItem } from './bannerItem';

interface Props {
  style?: ViewStyle,
  list?: Banner[],
}

export const BannerView: React.FC<Props> = (props) => {
  const {
    style = [],
    list,
  } = props;

  const renderItem = ({ item, index }: { item: Banner, index: number }) => (
    <BannerItem
      key={index.toString()}
      item={item}
    />
  );

  return (
    <FlatList
      horizontal
      style={{ ...styles.container, ...style }}
      data={list}
      renderItem={renderItem}
      ListHeaderComponent={<View style={styles.headerComponent}></View>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },
  headerComponent: {
    width: 16,
    backgroundColor: 'transparent',
  },
});