import React from 'react';
import { AppRoute } from './AppRoutes';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
interface AppSwitcherProps {
  routes: AppRoute[];
}

const AppRouter = ({ routes }: AppSwitcherProps) => {
  return (
    <Routes>
      {routes.map((route, key) => {
        return <Route path={route.path as string} element={route.page} key={key} />;
      })}
    </Routes>
  );
};
export default AppRouter;
