'use client';

import { Provider } from 'react-redux';
import store from '@/store/store'; // assuming store is at store/store.js
import { HelmetProvider } from 'react-helmet-async';
import { ImagePreloadProvider } from '@/lib/ImagePreloadContext';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <HelmetProvider>
                <ImagePreloadProvider>
                    {children}
                </ImagePreloadProvider>
            </HelmetProvider>
        </Provider>
    );
}
