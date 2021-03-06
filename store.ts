import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { AsteroidData } from "./interfaces/asteroid";

let store: any;

export type IRootState = {
  isShowOnlyHazardous: boolean;
  isMoonTypeDistance: boolean;
  asteroids: AsteroidData[];
};

const initialState: IRootState = {
  isShowOnlyHazardous: false,
  isMoonTypeDistance: false,
  asteroids: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "onChangeHazardous":
      return {
        ...state,
        isShowOnlyHazardous: action.isShowOnlyHazardous,
      };
    case "onChangeTypeDistance":
      return {
        ...state,
        isMoonTypeDistance: action.isMoonTypeDistance,
      };
    case "onAddAsteroids":
      return {
        ...state,
        asteroids: action.asteroids,
      };
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: IRootState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
