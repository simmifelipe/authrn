import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { signIn } from '../../services/auth';
import AuthContext from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign out" onPress={handleSignOut}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  }
});

export default Dashboard;
