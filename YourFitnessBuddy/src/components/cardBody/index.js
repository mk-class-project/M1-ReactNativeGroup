import React from 'react';
import { Subtitle, Body, Instructions } from './styles';

const CardBody = ({ muscle, equipment, difficulty, instructions }) => {
  return (
    <Body>
      <Subtitle>Muscle: {muscle}</Subtitle>
      <Subtitle>Equipment: {equipment}</Subtitle>
      <Subtitle>Difficulty: {difficulty}</Subtitle>
      <Instructions>{instructions}</Instructions>
    </Body>
  );
};

export default CardBody;
