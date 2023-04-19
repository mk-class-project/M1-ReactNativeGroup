import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { decrementCounter } from '../../actions/counter';

import { Modal } from 'react-native';

import { AdContainer, AdImageStyled, AdText, CountdownText, ModalContainer, BigFriendlyButton } from './styles';
import AdImage from '../../images/wheypub.jpg';

const Ad = ({ closeModal }) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        dispatch(decrementCounter());
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [counter, closeModal, dispatch]);

  return (
    <Modal visible={true} transparent={true}>
      <ModalContainer>
        <AdContainer>
          <AdImageStyled source={AdImage} />
          <AdText>-10% offerts</AdText>
          {counter > 0 ? (
            <CountdownText>{counter} </CountdownText>
          ) : (
            <BigFriendlyButton onPress={closeModal}>
              <CountdownText>X</CountdownText>
            </BigFriendlyButton>
          )}
        </AdContainer>
      </ModalContainer>
    </Modal>
  );
};

export default Ad;
