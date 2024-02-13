import { useEffect, useState } from 'react';

const usePersistedState = (initialState, SessionStorageKey) => {
  const [state, setState] = useState(() => {
    const persistedValue = sessionStorage.getItem(SessionStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(SessionStorageKey, JSON.stringify(state));
  }, [state, SessionStorageKey]);
  return [state, setState];
};
export const useSearchStr = () => {
  return usePersistedState('', 'SearchStr');
};
