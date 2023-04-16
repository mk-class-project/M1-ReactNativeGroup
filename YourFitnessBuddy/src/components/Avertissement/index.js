import styled from 'styled-components/native';
import AdvertisementImage from "../../images/wheypub.jpg";
import React, { useEffect, useState, onClose } from 'react';
import { connect } from 'react-redux';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import { startCounter } from './actions';


const AdvertisementContainer = styled.View`
  background-color: #f5f5f5;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
`;

const AdvertisementImageStyled = styled.Image`
  width: 200px;
  height: 300px;
  margin-right: 10px;
`;

const AdvertisementText = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
`;

const CloseButton = styled.TouchableOpacity`
  padding: 10px;
`;

const CloseButtonText = styled.Text`
  color: #777;
  font-size: 16px;
  font-weight: bold;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CountdownText = styled.Text`
  font-size: 16px;
`;

const AdvertisementModal = () => {
  const visible =true;
  const [modalVisible, setModalVisible] = useState(visible);
  const [counter, setCounter] = useState(5);
  
  useEffect(() => {
    let timeout;

    if (visible && counter > 0) {
      timeout = setTimeout(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [visible, counter]);

  useEffect(() => {
    if (counter === 0) {
      handleClose();
    }
  }, []);

  const handleClose = () => {
    setModalVisible(false);
    onClose();
  };

  return (
    <Modal animationType="fade" transparent visible={modalVisible}>
      <ModalContainer>
        <AdvertisementContainer>
          <AdvertisementImageStyled source={AdvertisementImage} />
          <AdvertisementText>-10% offerts</AdvertisementText>
          {counter > 0 ? (
          <CountdownText>{counter} </CountdownText>
        ) : (
          <CountdownText onPress={handleClose}>X</CountdownText>
        )}
        </AdvertisementContainer>

      </ModalContainer>
    </Modal>
  );
};

export default AdvertisementModal;
