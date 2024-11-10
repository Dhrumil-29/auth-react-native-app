import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={'large'} color={'#12345D'} />
      <Text>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
