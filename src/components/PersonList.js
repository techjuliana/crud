import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Title = styled.h4`
  margin: 0 0 10px 0;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  margin-bottom: 10px;
`;

const Cadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 30px; 
  color: #103979;
`;

const PersonList = ({ people, onCardClick }) => {
  if (people.length === 0) {
    return <Cadastro>Sem cadastros</Cadastro>;
  }

  return (
    <CardContainer>
      {people.map((person, index) => (
        <Card key={index} onClick={() => onCardClick(person)}>
          <img src={person.photo} alt={person.name} width="100%" />
          <Title>{person.name}</Title>
          <Label>Idade:</Label>
          <Value>{person.age}</Value>
          <Label>CPF:</Label>
          <Value>{person.cpf}</Value>
          <Label>Email:</Label>
          <Value>{person.email}</Value>
          <Label>Telefone:</Label>
          <Value>{person.phone}</Value>
          <Label>Endereço:</Label>
          <Value>{`${person.street}, ${person.number} - ${person.complement}, ${person.neighborhood}, ${person.city} - ${person.state}, ${person.cep}`}</Value>
          <Label>Data de Nascimento:</Label>
          <Value>{person.birthDate}</Value>
          <Label>Status:</Label>
          <Value>{person.status}</Value>
        </Card>
      ))}
    </CardContainer>
  );
};

export default PersonList;