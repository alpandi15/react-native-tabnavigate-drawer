import React, {createContext, useReducer} from 'react';
import {userAuthReducer} from '../reducers';

const initialState = {
  userAuth: {
    isAuth: false,
    user: null,
  },
};

const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({userAuth}, action) => ({
  userAuth: userAuthReducer(userAuth, action),
});

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
export {AppContext, AppProvider};
