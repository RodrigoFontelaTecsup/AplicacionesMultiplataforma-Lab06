import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
import { database } from '../database/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Usuarios from './Usuarios';
import UserDetailScreen from './UserDetailScreen';

const UserList = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, 'usuarios');
    const q = query(collectionRef, orderBy('name', 'desc'));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          phone: doc.data().phone,
        }))
      );
      return unsuscribe;
    });
  }, []);

  return (
    <ScrollView>
      <View>
        <Text>User List</Text>
        {users.map((usuario) => (
          <TouchableHighlight
            key={usuario.id}
            onPress={() => {
              navigation.navigate('UserDetailScreen', { usuario });
            }}
          >
            <Usuarios {...usuario} />
          </TouchableHighlight>
        ))}
      </View>
    </ScrollView>
  );
};

export default UserList;
