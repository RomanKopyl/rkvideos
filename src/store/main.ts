import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContinueVideo } from '../data/interfaces';
import { saveCurrentVideoToStorage } from '../utils/storageHelper';


interface InitStateInterface {
    showContinue?: boolean,
    continueVideo?: ContinueVideo | null,
};

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        showContinue: false,
        continueVideo: null,
    } as InitStateInterface,
    reducers: {
        setShowContinue(state, action: PayloadAction<boolean>) {
            state.showContinue = action.payload;;
        },
        setContinueVideo(state, action: PayloadAction<ContinueVideo | null>) {
            state.continueVideo = action.payload;

            if (action.payload?.videoId) {
                saveCurrentVideoToStorage(action.payload?.videoId, action.payload?.time);
                state.showContinue = true;
            }
        },
    },
});

export const {
    setShowContinue,
    setContinueVideo,
} = mainSlice.actions;

export default mainSlice.reducer;
