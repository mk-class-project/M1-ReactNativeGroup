import React from 'react';
import { Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AdContainer, AdImageStyled, AdTitle, AdDescription, CloseButton, CloseButtonText, ModalContainer } from './styles';
import AdImage from '../../images/wheypub.jpg';

const Ad = ({ closeModal }) => {
  const { t } = useTranslation();

  return (
    <Modal visible={true} transparent={true}>
      <ModalContainer>
        <AdContainer>
          <AdImageStyled source={AdImage} />
          <AdTitle>{t('message.adTitle')}</AdTitle>
          <AdDescription>{t('message.ad')}</AdDescription>
          <CloseButton onPress={closeModal}>
            <CloseButtonText>{t('message.adClose')}</CloseButtonText>
          </CloseButton>
        </AdContainer>
      </ModalContainer>
    </Modal>
  );
};

export default Ad;
