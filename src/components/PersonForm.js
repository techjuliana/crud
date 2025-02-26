import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Formulario = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-height: 70%;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 10px #103979;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: start;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 35px;
  cursor: pointer;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1.5px solid #103979;
  border-radius: 5px;
  ::placeholder {
    color:#103979;
  }
`;

const Select = styled.select`
  margin-bottom: 15px;
  padding: 8px;
  border: 1.5px solid #103979;
  border-radius: 5px;
  margin-right: 15px;
  margin-left: 15px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const SaveButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  background: white;
  text-align: right;
`;

const Lateral = styled.input`
margin-right: 25px;
margin-bottom: 15px;
  padding: 10px;
  border: 1.5px solid #103979;
  border-radius: 5px;
  ::placeholder {
    color:#103979;
  }
`;



const PersonForm = ({ onSave, person = {}, onClose }) => {
  const [formState, setFormState] = useState({
    photo: person.photo || '',
    name: person.name || '',
    age: person.age || '',
    cpf: person.cpf || '',
    email: person.email || '',
    phone: person.phone || '',
    cep: person.cep || '',
    street: person.street || '',
    number: person.number || '',
    complement: person.complement || '',
    neighborhood: person.neighborhood || '',
    city: person.city || '',
    state: person.state || '',
    birthDate: person.birthDate || '',
    status: person.status || 'finalizado',
    gender: person.gender || 'indefinido',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormState({ ...formState, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
  };

  const formatCPF = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})$/, '$1-$2');
  };

  return (
      <Formulario onSubmit={handleSubmit}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Cadastro</Title>
        <Label>Selecione uma foto de perfil:</Label>
        <Input type="file" accept="image/*" onChange={handleFileChange} />
        {formState.photo && <ImagePreview src={formState.photo} alt="Preview" />}

        <Input type="text" name="name" value={formState.name} onChange={handleChange} placeholder='Nome'/>
        
<div>
        <Lateral placeholder='Idade' type="number" name="age" value={formState.age} onChange={handleChange} />

        <Input
          type="text"
          name="cpf"
          placeholder='CPF'
          value={formState.cpf}
          onChange={(e) => setFormState({ ...formState, cpf: formatCPF(e.target.value) })}
        />

</div>
        <Input type="email" placeholder='Email' name="email" value={formState.email} onChange={handleChange} />
        
        <Input
          type="text"
          name="phone"
          placeholder='Telefone'
          value={formState.phone}
          onChange={(e) => setFormState({ ...formState, phone: formatPhone(e.target.value) })}
        />
        
<div>
        <Lateral type="text" name="cep" placeholder='CEP' value={formState.cep} onChange={handleChange} />

        <Input type="text" name="state" placeholder='Estado' value={formState.state} onChange={handleChange} />
</div>

<div>
        <Lateral type="text" placeholder='Rua' name="street" value={formState.street} onChange={handleChange} />

        <Input type="text" placeholder='Número' name="number" value={formState.number} onChange={handleChange} />
</div>

        <Input type="text" placeholder='Bairro' name="neighborhood" value={formState.neighborhood} onChange={handleChange} />

        <Input type="text" placeholder='Cidade' name="city" value={formState.city} onChange={handleChange} />
        
        <Label>Data de Nascimento</Label>
        <Input type="date" name="birthDate" value={formState.birthDate} onChange={handleChange} />
        

<div>
        <Label>Status</Label>
        <Select name="status" value={formState.status} onChange={handleChange}>
          <option value="finalizado">Finalizado</option>
          <option value="pendente">Pendente</option>
        </Select>
        
        <Label>Gênero</Label>
        <Select name="gender" value={formState.gender} onChange={handleChange}>
          <option value="homem">Homem</option>
          <option value="mulher">Mulher</option>
          <option value="indefinido">Indefinido</option>
        </Select>
        </div>

        
        <SaveButtonContainer>
          <Button type="submit">Salvar</Button>
        </SaveButtonContainer>
      </Formulario>
  );
};

export default PersonForm;