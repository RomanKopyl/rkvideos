import React from 'react';
import { FlatList, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Section } from '../../data/interfaces';
import { SectionItem } from './sectionItem';

interface Props {
  style?: ViewStyle,
  title?: string,
  list?: Section[],
}

export const SectionView: React.FC<Props> = (props) => {
  const {
    style = [],
    title,
    list
  } = props;

  const renderItem = ({ item, index }: { item: Section, index: number }) => (
    <SectionItem
      key={index.toString()}
      item={item}
    />
  );

  return (
    <View style={{ ...styles.container, ...(style ?? []) }}>
      <Text style={styles.title}>
        {title}
      </Text>

      <FlatList
        horizontal
        style={{ ...styles.container, ...style }}
        data={list}
        renderItem={renderItem}
        ListHeaderComponent={<View style={styles.headerComponent}></View>}
      />
    </View>

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
  title: {
    fontSize: 20,
    color: 'white',
    lineHeight: 24,
    fontWeight: '700',
    paddingLeft: 16,
  },
});