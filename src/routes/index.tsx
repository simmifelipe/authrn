import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import AuthContext from '../../src/contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Routes;
