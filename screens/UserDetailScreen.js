import React from 'react';
import { View, Text } from 'react-native';

const UserDetailScreen = ({ route }) => {
  const { usuario } = route.params;
  return (
    <View>
      <Text>User Detail</Text>
      <Text>Name: {usuario.name}</Text>
      <Text>Email: {usuario.email}</Text>
      <Text>Phone: {usuario.phone}</Text>
    </View>
  );
};

export default UserDetailScreen;
