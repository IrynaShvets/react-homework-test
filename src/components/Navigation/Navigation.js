import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function Navigation() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Counter</Link>
          <Link to="/todos">Todos</Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
