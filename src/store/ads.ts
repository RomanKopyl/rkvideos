import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setPurchaseKeyToStore } from '../dataLayer/helpers/asyncStore';

interface AdsStateInterface {
    loaded: boolean,
    isPurchase?: boolean,
    purchaseKey?: string,
    purchase?: any,
    products: string[],
};

const adsSlice = createSlice({
    name: 'ads',
    initialState: {
        loaded: false,
        isPurchase: false,
        purchaseKey: undefined,
        purchase: undefined,
        products: [],
    } as AdsStateInterface,
    reducers: {
        setLoaded(state, action: PayloadAction<boolean>) {
            state.loaded = action.payload;
        },
        setPurchaseKey(state, action: PayloadAction<string>) {
            state.purchaseKey = action.payload;
            state.isPurchase = action.payload.length > 0;
            setPurchaseKeyToStore(action.payload)
        },
        setPurchase(state, action: PayloadAction) {
            state.purchase = action.payload;
        },
        setProducts(state, action: PayloadAction<string[]>) {
            state.products = action.payload;
        },
    },
});

export const {
    setLoaded,
    setPurchaseKey,
    setProducts,
} = adsSlice.actions;

export default adsSlice.reducer;
