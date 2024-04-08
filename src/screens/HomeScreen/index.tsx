
import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { DATA } from '../../constants';
import { BannerView } from './bannerView';
import { ContinueWatchingView } from './continueWatchingView';
import { HomeHeader } from './homeHeader';
import { SectionView } from './sectionView';
import { ConfigContext } from '../../navigation/RootNavigator';


export const HomeScreen: React.FC = () => {
  const backgroundStyle = {
    backgroundColor: '#0F0F0F',
    flex: 1,
  };

  const config = useContext(ConfigContext);
  console.log('CONFIG', config);


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
            else if (item.type === 'continue') {
              return (
                <ContinueWatchingView
                  key={index}
                  style={styles.gap}
                  title={item?.title}
                // list={item?.data}
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
        <View style={{ height: 50 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gap: {
    marginTop: 24,
  },
});