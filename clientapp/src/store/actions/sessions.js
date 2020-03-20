// action types
export const SET_SESSION = 'SET_SESSION';
export const CLEAR_SESSION = 'CLEAR_SESSION';

export const setSession = session => {
  return {
    type: SET_SESSION,
    session,
  };
};

export const clearSession = () => {
  return {
    type: CLEAR_SESSION,
  };
};
