import ReactDOM from "react-dom/client";
import { RemoteGuard } from '@mf-lab/remote-guard';
import { lazy } from "react";

import "./index.css";

const Widget = lazy(() => import('remote/Widget').then((module) => ({ default: module.Widget })));

export const App = () => (
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

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);