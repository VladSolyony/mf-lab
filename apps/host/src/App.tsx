import ReactDOM from "react-dom/client";
import { ErrorBoundary } from '@mf-lab/error-boundary';
import { lazy, Suspense } from "react";

import "./index.css";

const Widget = lazy(() => import('remote/Widget').then((module) => ({ default: module.Widget })));

export const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react-19</div>
    <Suspense>
      <ErrorBoundary>
        <Widget />
      </ErrorBoundary>
    </Suspense>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);