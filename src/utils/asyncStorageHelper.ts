import AsyncStorage from "@react-native-async-storage/async-storage";
import { CONTINUE_WATCHING_VIDEO } from "../constants";

export interface ContinueVideo {
    videoId: string,
    time: number
}

export const saveToAsyncStorage = async (videoId: string, time: number) => {
    // save video id and time of stop
    console.log('SAVING');
    await AsyncStorage.setItem(CONTINUE_WATCHING_VIDEO, JSON.stringify({
        videoId,
        time,
    }));
}

export const getCurrentVideoFromAsyncStorage: () => Promise<ContinueVideo | null> = async () => {
    // save video id and time of stop
    const result = await AsyncStorage.getItem(CONTINUE_WATCHING_VIDEO);

    console.log('GETTING', result);
    return result
        ? JSON.parse(result)
        : null
} 
