"use client"
import { store } from './feature/store'
import { Provider } from 'react-redux'
import { ReactNode } from 'react';

type ReduxProviderType = {
    children: ReactNode;
};

function ReduxProvider({ children }: ReduxProviderType) {
    return (

        <Provider store={store}>
            {children}
        </Provider>
    )
} 

export default ReduxProvider;

