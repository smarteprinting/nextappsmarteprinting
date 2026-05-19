import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function optimizeCloudinaryUrl(url) {
    if (!url || typeof url !== 'string') return url;
    if (!url.includes('res.cloudinary.com')) return url;
    return url.replace('/upload/', '/upload/f_auto,q_auto/');
}
