import React from 'react';

const HomePage = React.lazy(() => import('./pages/Home'));
const AllSchoolsPage = React.lazy(() => import('./pages/AllSchools'));
const SchoolPage = React.lazy(() => import('./pages/School'));
const SuggestionPage = React.lazy(() => import('./pages/Suggestion'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

export enum Routes {
  AllSchools = '/all-schools',
  School = '/all-schools/school/:id',
  Suggestion = '/suggestion',

  Home = '/',
  NotFound = '/not-found',
  Others = '/*',
}

// This can be modified later when we add login system.
type IsAvailableFunction = () => boolean;

interface RouteConfig {
  url: Routes;
  component: React.LazyExoticComponent<() => JSX.Element>;
  isAvailable?: IsAvailableFunction;
}

export const isRouteAvailable: Record<Routes, IsAvailableFunction> = {
  [Routes.AllSchools]: () => true,
  [Routes.School]: () => true,
  [Routes.Suggestion]: () => true,

  [Routes.Home]: () => true,
  [Routes.NotFound]: () => true,
  [Routes.Others]: () => true,
};

const createRouteConfig = <R extends Routes>(route: R, component: RouteConfig['component']): RouteConfig => ({
  url: route,
  component,
  isAvailable: isRouteAvailable[route],
});

export const ROUTE_CONFIG: RouteConfig[] = [
  createRouteConfig(Routes.AllSchools, AllSchoolsPage),
  createRouteConfig(Routes.School, SchoolPage),
  createRouteConfig(Routes.Suggestion, SuggestionPage),
  createRouteConfig(Routes.Home, HomePage),
  createRouteConfig(Routes.NotFound, NotFoundPage),
  createRouteConfig(Routes.Others, NotFoundPage),
];
