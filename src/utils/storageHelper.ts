import { CONTINUE_WATCHING_VIDEO } from "../constants";
import { ContinueVideo } from "../data/interfaces";
import { storage } from "../navigation/RootNavigator";


export const saveCurrentVideoToStorage = async (videoId: string, time: number) => {
    // save video id and time of stop
    console.log('SAVING');
    storage.set(CONTINUE_WATCHING_VIDEO, JSON.stringify({
        videoId,
        time,
    }));
}

export const getCurrentVideoFromStorage: () => Promise<ContinueVideo | null> = async () => {
    // save video id and time of stop
    const result = storage.getString(CONTINUE_WATCHING_VIDEO);

    console.log('GETTING', result);
    return result
        ? JSON.parse(result)
        : null
} 
