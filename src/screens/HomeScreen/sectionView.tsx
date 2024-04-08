import React from 'react';
import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Poster } from '../../data/interfaces';
import { SectionItem } from './sectionItem';

interface Props {
  style?: ViewStyle,
  title?: string,
  list?: Poster[],
}

export const SectionView: React.FC<Props> = (props) => {
  const { style = [], title, list } = props;

  return (
    <View style={{ ...styles.container, ...(style ?? []) }}>
      <Text style={styles.title}>
        {title}
      </Text>
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
              <SectionItem
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
    paddingLeft: 16,
  },
});