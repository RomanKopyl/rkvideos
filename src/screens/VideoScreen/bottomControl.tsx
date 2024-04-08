import { Slider } from '@miblanchard/react-native-slider';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { reverseGradientData } from '../../constants';
import { convertToTime } from '../../utils/helper';


interface Props {
    currentTime: number
    endTime: number
    onPressPause: () => void
    onCurrentTimeChange: (value: number) => void
}

export const BottomControl: React.FC<Props> = (props) => {
    const {
        currentTime,
        endTime,
        onPressPause,
        onCurrentTimeChange,
    } = props;

    const onValueChange = (value: number[]) => {
        onCurrentTimeChange(value[0]);
    }


    return (
        <LinearGradient colors={reverseGradientData} style={styles.linearGradient}>
            <TouchableOpacity
                style={{
                    padding: 21,
                }}
                onPress={onPressPause}
            >
                <Image
                    source={require('../../images/pause.png')}
                    style={{
                        width: 13,
                        height: 18,
                    }}
                />
            </TouchableOpacity>
            <View style={{
                flex: 1,
                paddingRight: 21,
                justifyContent: 'center',
            }}>
                <View style={{
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    marginTop: 5,
                }}>
                    <Slider
                        trackClickable={true}
                        value={currentTime}
                        minimumValue={0}
                        maximumValue={endTime}
                        onValueChange={onValueChange}
                        maximumTrackTintColor="#FFFFFF32"
                        minimumTrackTintColor="#FFFFFF"
                        thumbTintColor="#FFFFFF"
                        thumbStyle={styles.thumb}
                        trackStyle={styles.track}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: -10,
                }}>
                    <Text style={{
                        fontSize: 11,
                        lineHeight: 14,
                        color: 'white'
                    }}>
                        {convertToTime(currentTime)}
                    </Text>
                    <Text style={{
                        fontSize: 11,
                        lineHeight: 14,
                        color: 'white'
                    }}>
                        {convertToTime(endTime)}
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
};


var styles = StyleSheet.create({
    linearGradient: {
        height: 81,
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10,
        bottom: 0,
    },
    thumb: {
        borderColor: '#FFF',
        borderWidth: 3,
        height: 9,
        width: 9,

    },
    track: {
        height: 3,
        backgroundColor: '#FFFFFF32'
    }
});