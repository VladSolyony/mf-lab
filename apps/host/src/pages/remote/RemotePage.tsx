
import { RemoteGuard } from '@mf-lab/remote-guard';
import { lazy } from "react";
import { loadComponent, loadRemote } from '@mf-lab/remote-loader';
import { RemoteModule } from '@mf-lab/remote-types';

import "../../index.css";

const Widget = lazy(async () => {
  await loadRemote(
    "http://localhost:3001/remoteEntry-v1.js",
    "remote"
  );

  const module = await loadComponent<RemoteModule>('remote', './Widget');
  return ({ default: module.Widget });
});

export const Remote = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react-19</div>
    <RemoteGuard
      suspenseProps={{
        fallback: <div>Loading...</div>
      }}
    >
      <Widget />
    </RemoteGuard>
  </div>
);
