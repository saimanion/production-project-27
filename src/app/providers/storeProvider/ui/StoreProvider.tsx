import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/storeProvider/config/store';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface ReduxProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider:FC<ReduxProviderProps> = (props) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
