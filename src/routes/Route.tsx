import {View, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthContext from '../appwrite/AuthContext';
import AuthRoute from './AuthRoute';
import AppRoute from './AppRoute';
import Loading from '../components/Loading';

const Route = () => {
  const [loading, setLoading] = useState(true);
  const {isLoggedIn, appwrite, setIsLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then(response => {
        setLoading(false);
        if (response) setIsLoggedIn(true);
      })
      .catch(_ => {
        setLoading(false);
        setIsLoggedIn(false);
      });
  }, [appwrite, isLoggedIn]);

  if (loading) return <Loading />;
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppRoute /> : <AuthRoute />}
    </NavigationContainer>
  );
};

export default Route;
