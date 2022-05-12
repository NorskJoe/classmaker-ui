import React, { Dispatch, SetStateAction } from 'react';
import { GlobalAuthInterface } from '../models/authContext.model';

export const GlobalAuthContext = React.createContext({
  state: {} as Partial<GlobalAuthInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalAuthInterface>>>,
});

export const useAuth = () => {
  const ctx = React.useContext(GlobalAuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within a GlobalAuthContext');
  }
  return ctx;
};

export default function AuthProvider({
  children,
  value = {} as GlobalAuthInterface,
}: {
  children: React.ReactNode;
  value?: Partial<GlobalAuthInterface>;
}) {
  const [state, setState] = React.useState(value);

  return (
    <GlobalAuthContext.Provider value={{ state, setState }}>
      {children}
    </GlobalAuthContext.Provider>
  );
}
