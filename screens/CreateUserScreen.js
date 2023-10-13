import React, { useState, cloneElement } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Modal,
} from 'react-native';
import { database } from '../database/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [modalVisible, setModalVisible] = useState(false);

  const saveNewUser = async () => {
    if (state.name == '') {
      alert('Por favor, ingresa un nombre');
    } else {
      await addDoc(collection(database, 'usuarios'), state);
      setModalVisible(true);
      setState({
        name: '',
        email: '',
        phone: '',
      });
      props.navigation.navigate('UserList');
    }
  };

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Name User'
          onChangeText={(value) => handleChangeText('name', value)}
          value={state.name}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Email User'
          onChangeText={(value) => handleChangeText('email', value)}
          value={state.email}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Phone User'
          onChangeText={(value) => handleChangeText('phone', value)}
          value={state.phone}
        />
      </View>

      <View>
        <Button title='Save User' onPress={() => saveNewUser()} />
      </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Usuario creado exitosamente</Text>
            <Button title='Cerrar' onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default CreateUserScreen;
