export const loadMainPage = () => import('./MainPage').then((module) => ({ default: module.MainPage }));
