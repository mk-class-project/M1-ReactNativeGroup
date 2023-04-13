import React from 'react';
import { Title, Type, Header } from './styles';

import { useTranslation } from 'react-i18next';

const CardHeader = ({ name, type }) => {
  return (
    <Header>
      <Title>{name}<Type> - {type}</Type></Title>
    </Header>
  );
};

export default CardHeader;
