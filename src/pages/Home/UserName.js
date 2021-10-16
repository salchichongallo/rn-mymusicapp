import React from 'react';
import {StyleSheet} from 'react-native';
import Text from '../../components/Text';

function UserName({children}) {
  return <Text style={styles.label}>@{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.37)',
  },
});

export default UserName;
