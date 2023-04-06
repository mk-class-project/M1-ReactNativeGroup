import React from 'react';
import { Title, Type, Header } from './styles';

const CardHeader = ({ name, type }) => {
  return (
    <Header>
      <Title>{name}<Type> - {type}</Type></Title>
    </Header>
  );
};

export default CardHeader;
