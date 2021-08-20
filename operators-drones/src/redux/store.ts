import { configureStore} from '@reduxjs/toolkit';
import { reducer } from './Slices/rootSlice';

export const store = configureStore({
    reducer,
    devTools: true
});