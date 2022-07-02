import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Portal, Modal, Provider, Avatar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { triggerModal } from "../actions/modalAction";

const Details = () => {
  const modalState = useSelector((state) => state.modal);
  const modalData = useSelector((state) => state.search.song);
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(triggerModal(false));
  };

  return (
    <Provider>
      <Portal>
        <Modal
          contentContainerStyle={styles.modalContainer}
          visible={modalState.isVisible}
          onDismiss={hideModal}
        >
          {modalData != {} && (
            <View style={styles.detailsContainer}>
              <Image
                source={modalData.artworkUrl100}
                style={{ height: 100, width: 100 }}
              />

              <Text>{modalData.artistName}</Text>
              <Text>{modalData.trackName}</Text>
              <Text>{modalData.collectionName}</Text>
            </View>
          )}
        </Modal>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    display: "flex",
    alignItems: "center",
  },
  detailsContainer: {
    display: "flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Details;
