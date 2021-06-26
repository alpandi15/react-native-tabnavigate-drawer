export const userAuthReducer = (state, action) => {
  switch (action.type) {
    case 'IS_LOGGED':
      return {
        ...state,
        isAuth: action?.payload?.isAuth,
        user: action?.payload?.user,
      };
    default:
      return state;
  }
};
