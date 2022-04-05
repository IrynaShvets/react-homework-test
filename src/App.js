import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const CounterView = lazy(() =>
  import('./views/CounterView' /* webpackChunkName: "counter-view" */)
);
const TodosView = lazy(() =>
  import('./views/TodosView' /* webpackChunkName: "counter-view" */)
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<CounterView />} />
          <Route path="/todos" element={<TodosView />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
