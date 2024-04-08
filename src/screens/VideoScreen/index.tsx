import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import Video, { OnProgressData, OnSeekData } from 'react-native-video';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { VideoData } from '../../data/interfaces';
import { getCurrentVideoFromAsyncStorage, saveToAsyncStorage } from '../../utils/asyncStorageHelper';
import { showError } from '../../utils/helper';
import { BottomControl } from './bottomControl';
import { Header } from './header';
import { useAppDispatch } from '../../hooks';
import { setContinueVideo } from '../../store/main';


export const VideoScreen: React.FC = ({ route }) => {
  const isContinueExist = route?.params?.isContinueExist ?? false;
  const backgroundStyle = {
    backgroundColor: Colors.darker,
    flex: 1,
  };
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<VideoData[] | undefined>();
  const [currentVideo, setCurrentVideo] = useState(0);

  const [paused, setPaused] = useState(false)
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const videoRef = useRef<Video>();


  useEffect(() => {
    // Load video data from server
    const subscriber = firestore()
      .collection('videos')
      .onSnapshot(querySnapshot => {
        const tempArray: VideoData[] = [];

        if (!querySnapshot) {
          console.log('Collection is null');
          return;
        }
        querySnapshot.forEach(documentSnapshot => {
          tempArray.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });

        setVideos(tempArray);

        // if route from continue button
        if (isContinueExist) {
          getCurrentVideoFromAsyncStorage()
            .then(current => {
              if (!current) return;
              const index = tempArray.findIndex(item => item.id === current?.videoId);
              setCurrentVideo(index);
              setCurrentTime(current.time);
            })
            .catch(e => showError(e));
          ;
        }

        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber()
  }, []);


  const onVideoLoadStart = () => {
    console.log('onVideoLoadStart');
    setLoading(true);
  };

  const closeVideo = () => {
    console.log("CLOSE", currentTime, videos?.[currentVideo]);

    const videoId = videos?.[currentVideo]?.id;
    if (!videoId) return;

    dispatch(setContinueVideo({
      videoId,
      time: currentTime,
    }));
  }

  const onVideoEnd = () => {
    setCurrentTime(0);
    const newVideoNumber = currentVideo + 1 == videos?.length
      ? 0
      : currentVideo + 1
    setCurrentVideo(newVideoNumber);
  }

  const onVideoLoad = () => {
    if (!currentTime || currentTime == 0) return;

    videoRef?.current?.seek(currentTime);
  }

  const onProgress = (res: OnProgressData) => {
    setCurrentTime(res.currentTime);
    setEndTime(res.seekableDuration);
  }

  const onSeek = (res: OnSeekData) => {
    console.log('ONSEEK', res);
    setCurrentTime(res.seekTime);
  }

  const onPressPause = () => {
    console.log('PAUSE');

    setPaused(!paused);
  }

  const onCurrentTimeChange = (time: number) => {
    setCurrentTime(time);
    videoRef?.current?.seek(time);
  }


  return (
    <SafeAreaView style={backgroundStyle}>
      <Header
        title={videos?.[currentVideo]?.title}
        onPress={closeVideo}
      />
      {
        loading
          ?
          <View style={{ height: '100%', marginTop: 50 }}>
            <ActivityIndicator size={'large'} />
          </View>
          :
          <Video
            ref={videoRef}
            paused={paused}
            onVideoLoadStart={onVideoLoadStart}
            source={{ uri: videos?.[currentVideo]?.videoUrl }}
            resizeMode="cover"
            onProgress={onProgress}
            onSeek={onSeek}
            // onBuffer={this.onBuffer}                // Callback when remote video is buffering
            // onError={this.videoError}               // Callback when video cannot be loaded
            onEnd={onVideoEnd}
            onLoad={onVideoLoad}
            onTouchStart={(res) => {
              console.log('onTouchStart', res);
            }}
            style={styles.backgroundVideo} />
      }
      <BottomControl
        currentTime={currentTime}
        onPressPause={onPressPause}
        endTime={endTime}
        onCurrentTimeChange={onCurrentTimeChange}
      />
    </SafeAreaView >
  );
};


var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});