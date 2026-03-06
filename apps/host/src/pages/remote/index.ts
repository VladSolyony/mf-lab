export const loadRemotePage = () => import('./RemotePage').then((module) => ({ default: module.Remote }));
