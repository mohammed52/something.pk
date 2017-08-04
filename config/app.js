import { ENV } from './env';

export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';

export const apiEndpoint = isDebug ? 'http://localhost:5000' : 'https://boiling-eyrie-20290.herokuapp.com';
// export const apiEndpoint = isDebug ? 'http://localhost:5000' : 'http://localhost:5000';
// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID = null;

