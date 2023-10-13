import * as React from 'react';
import * as RN from 'react-native';
import { database } from '../database/firebase';
import { doc } from 'firebase/firestore';
import { Card } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function Usuarios({ id, email, name, phone }) {
  return (
    <Card containerStyle={styles.cardContainer}>
      <RN.View>
        <RN.Text>{email}</RN.Text>
        <RN.Text>{name}</RN.Text>
        <RN.Text>{phone}</RN.Text>
      </RN.View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
});
