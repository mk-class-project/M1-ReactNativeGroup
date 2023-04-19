import React from 'react';
import { Subtitle, Body, Instructions } from './styles';

import { useTranslation } from 'react-i18next';

const CardBody = ({ muscle, equipment, difficulty, instructions }) => {

  const { t } = useTranslation();

  return (
    <Body>
      <Subtitle>{t('filter.muscle')} : {muscle}</Subtitle>
      <Subtitle>{t('filter.equipment')} : {equipment}</Subtitle>
      <Subtitle>{t('filter.difficulty')} : {difficulty}</Subtitle>
      <Instructions>{instructions}</Instructions>
    </Body>
  );
};

export default CardBody;
