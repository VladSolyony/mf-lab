import ReactDOM from "react-dom/client";

import "./index.css";
import { lazy, Suspense } from "react";

const Widget = lazy(() => import('remote/Widget').then((module) => ({ default: module.Widget })));

export const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react-19</div>
    <Suspense>
      <Widget />
    </Suspense>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);