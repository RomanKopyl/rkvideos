
import React, { useContext, useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { DATA } from '../../constants';
import { ConfigContext, ContinueVideoContext } from '../../navigation/RootNavigator';
import { BannerView } from './bannerView';
import { ContinueWatchingView } from './continueWatchingView';
import { HomeHeader } from './homeHeader';
import { SectionView } from './sectionView';
import { useAppSelector } from '../../hooks';


export const HomeScreen: React.FC = () => {
  const backgroundStyle = {
    backgroundColor: '#0F0F0F',
    flex: 1,
  };

  const config = useContext(ConfigContext);
  const { showContinue } = useAppSelector(state => state.main);


  return (
    <SafeAreaView style={{ ...backgroundStyle }}>

      <StatusBar backgroundColor='#0F0F0F' />

      <HomeHeader />

      <ScrollView>
        {
          config?.data && config?.data?.map((item, index) => {
            if (item.type === 'banner') {
              return (
                <BannerView
                  key={index}
                  style={styles.gap}
                  list={DATA.banner.data}
                />
              )
            }
            else if (item.type === 'continue' && showContinue) {
              return (
                <ContinueWatchingView
                  key={index}
                  style={styles.gap}
                  title={item?.title}
                  data={DATA.continue.continueData}
                />
              )
            }
            else if (item.type === 'section') {
              if (!item?.subType) return;

              const title = DATA[item?.subType].title;
              const list = DATA[item?.subType].data;

              return (
                <SectionView
                  key={index}
                  style={styles.gap}
                  title={title}
                  list={list}
                />
              );
            }
          })
        }

        <View style={styles.bottom}></View>
      </ScrollView>
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