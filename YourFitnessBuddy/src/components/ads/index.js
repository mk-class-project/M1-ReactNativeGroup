import AdImage from "../../images/wheypub.jpg";
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import { startCounter } from './actions';

import { AdContainer, AdImageStyled, AdText, CountdownText, ModalContainer } from './styles';

const Ad = () => {
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
  };

  return (
    <Modal animationType="fade" transparent visible={modalVisible}>
      <ModalContainer>
        <AdContainer>
          <AdImageStyled source={AdImage} />
          <AdText>-10% offerts</AdText>
          {counter > 0 ? (
          <CountdownText>{counter} </CountdownText>
        ) : (
          <CountdownText onPress={handleClose}>X</CountdownText>
        )}
        </AdContainer>

      </ModalContainer>
    </Modal>
  );
};

export default Ad;
