import {View, Text} from 'react-native';
import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import AppwriteService from './service';

type AppContextType = {
  appwrite: AppwriteService;
  isLoggedIn: Boolean;
  setIsLoggedIn: (isLoggedIn: Boolean) => void;
};

export const AuthContext = createContext<AppContextType>({
  appwrite: new AppwriteService(),
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AuthContexProvider: FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const defaultValue: AppContextType = {
    appwrite: new AppwriteService(),
    isLoggedIn: false,
    setIsLoggedIn,
  };
  return (
    <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
