import React from 'react';
import styled from 'styled-components';
import PersonForm from './PersonForm';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const PersonDetails = ({ person, onSave }) => {
  return (
    <DetailsContainer>
      <Title>Detalhes cadastro</Title>
      <PersonForm person={person} onSave={onSave} />
    </DetailsContainer>
  );
};

export default PersonDetails;