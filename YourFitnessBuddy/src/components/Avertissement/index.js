import styled from 'styled-components/native';
import AdvertisementImage from "../../images/ArnoldBuddy.jpg";
import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';


const AdvertisementContainer = styled.View`
  background-color: #f5f5f5;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
`;

const AdvertisementImageStyled = styled.Image`
  width: 60px;
  height: 60px;
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

const AdvertisementModal = ({ visible, onClose }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const [counter, setCounter] = useState(5);
  
  useEffect(() => {
    let timeout;

    if (visible && counter > 0) {
      timeout = setTimeout(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [visible, counter]);

  useEffect(() => {
    if (counter === 0) {
      setModalVisible(false);
      onClose();
    }
  }, [counter, onClose]);

  const handleClose = () => {
    setModalVisible(false);
    onClose();
  };

  return (
    <Modal animationType="fade" transparent visible={modalVisible}>
      <ModalContainer>
        <AdvertisementContainer>
          <AdvertisementImageStyled source={AdvertisementImage} />
          <AdvertisementText>Achetez notre nouveau produit dès maintenant!</AdvertisementText>
            <CountdownText>{`${counter} ${counter > 1 ? '  ' : 
            <CloseButton onPress={handleClose}>
              <CloseButtonText>Fermer</CloseButtonText>
            </CloseButton>
            }`}</CountdownText>
        </AdvertisementContainer>
  
      </ModalContainer>
    </Modal>
  );
};

export default AdvertisementModal;