import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { CounterReducer } from 'entities/Counter/model/slice/counterSlice';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: userReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
