
import React, { useContext } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { DATA } from '../../constants';
import { DataConfig } from '../../data/interfaces';
import { useAppSelector } from '../../hooks';
import { ConfigContext } from '../../navigation/RootNavigator';
import { BannerView } from './bannerView';
import { ContinueWatchingView } from './continueWatchingView';
import { HomeHeader } from './homeHeader';
import { SectionView } from './sectionView';


export const HomeScreen: React.FC = () => {
  const backgroundStyle = {
    backgroundColor: '#0F0F0F',
    flex: 1,
  };

  const config = useContext(ConfigContext);
  const { showContinue } = useAppSelector(state => state.main);


  const renderItem = ({ item, index }: { item: DataConfig, index: number }) => {
    switch (item.type) {
      case 'banner':
        return (
          <BannerView
            key={index}
            style={styles.gap}
            list={DATA.banner.data}
          />
        )

      case 'continue':
        if (!showContinue) return <></>;
        return (
          <ContinueWatchingView
            key={index}
            style={styles.gap}
            title={item?.title}
            data={DATA.continue.continueData}
          />
        )

      case 'section':
        if (!item?.subType) return <></>;
        return (
          <SectionView
            key={index}
            style={styles.gap}
            title={DATA[item?.subType].title}
            list={DATA[item?.subType].data}
          />
        );

      default:
        return <></>;
    }
  };

  return (
    <SafeAreaView style={{ ...backgroundStyle }}>

      <StatusBar backgroundColor='#0F0F0F' />

      <HomeHeader />

      <FlatList
        data={config?.data}
        renderItem={renderItem}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gap: {
    marginTop: 24,
  },
  bottom: {
    height: 50,
  }
});