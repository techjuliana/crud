import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PersonList from './components/PersonList';
import Button from './components/Button';
import Modal from './components/Modal';
import PersonForm from './components/PersonForm';
// import PersonDetails from './components/PersonDetails';
import MenuIcon from './assets/menu.png';
import CloseIcon from './assets/close.png';
import LogoIcon from './assets/logo.png';
import SubButton from './components/SubButton';

const AppContainer = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #103979;
  color: #fff;
  padding: 10px 20px;
  z-index: 1000;
`;

const HeaderLateral = styled.div`
  display: flex;
`;

const HeaderObj = styled.div`
  /* width: 1300px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  width: 270px;
  height: 100%;
  background-color: #BDBDBD;
  color: #fff;
  transition: left 0.4s ease;
  padding: 20px;
  padding-top: 100px;
  overflow-y: auto;
`;

const ToggleButton = styled.button`
  background-color: #103979;
  border: none;
  padding-right: 30px;
  cursor: pointer;
`;

const Icon = styled.img`
width: 30px;
height: 30px;
`;

const Logo = styled.img`
width: 50px;
height: 50px;
`;

const SubMenuButton = styled(Button)`
  margin-top: 10px;
`;

const SubMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-top: 10px;
`;

const MenuTexto = styled.h2`
color: #103979;
`

const MenuParagrafo = styled.h4`
color: #103979;
`

const ExternalLink = styled.a`
  color: #103979;
  text-decoration: none;
  margin-top: 10px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const App = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [people, setPeople] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
  const [isSubMenuOpen3, setSubMenuOpen3] = useState(false);

  useEffect(() => {
    const savedPeople = JSON.parse(localStorage.getItem('people')) || [];
    setPeople(savedPeople);
  }, []);

  const handleAddPerson = (person) => {
    const updatedPeople = [...people, person];
    setPeople(updatedPeople);
    localStorage.setItem('people', JSON.stringify(updatedPeople));
    setAddModalOpen(false);
  };

  const handleUpdatePerson = (updatedPerson) => {
    const updatedPeople = people.map((person) =>
      person === selectedPerson ? updatedPerson : person
    );
    setPeople(updatedPeople);
    localStorage.setItem('people', JSON.stringify(updatedPeople));
    setDetailModalOpen(false);
  };

  const handleCardClick = (person) => {
    setSelectedPerson(person);
    setDetailModalOpen(true);
  };

  return (
    <AppContainer>
      <Header>
      <HeaderObj>
      <HeaderLateral>
      <ToggleButton onClick={() => setSidebarOpen(!isSidebarOpen)}>
        <Icon src={isSidebarOpen ? CloseIcon : MenuIcon} alt="menu icon" />
        </ToggleButton>
        <Button
  onClick={() => setAddModalOpen(true)}
  style={{ backgroundColor: '#2D44A4' }}
>
  Cadastrar Jogador
</Button>
      </HeaderLateral>
        <Logo src={LogoIcon} alt="menu icon" />
        </HeaderObj>
      </Header>
      <Sidebar isOpen={isSidebarOpen}>
        <MenuTexto>Menu</MenuTexto>
        <Button onClick={() => setAddModalOpen(true)}>Adicionar cadastro</Button>

        <SubMenuButton onClick={() => setSubMenuOpen(!isSubMenuOpen)}>
          Mais Opções
        </SubMenuButton>
        <SubMenu isOpen={isSubMenuOpen}>
          <SubButton onClick={() => alert('Opção 1 clicada')}>Opção 1</SubButton>
          <SubButton onClick={() => alert('Opção 2 clicada')}>Opção 2</SubButton>
          <SubButton onClick={() => alert('Opção 3 clicada')}>Opção 3</SubButton>
        </SubMenu>

        <SubMenuButton onClick={() => setSubMenuOpen2(!isSubMenuOpen2)}>
          Mais Opções 2
        </SubMenuButton>
        <SubMenu isOpen={isSubMenuOpen2}>
        <SubButton onClick={() => alert('Opção 1 clicada')}>Opção 1</SubButton>
          <SubButton onClick={() => alert('Opção 2 clicada')}>Opção 2</SubButton>
          <SubButton onClick={() => alert('Opção 3 clicada')}>Opção 3</SubButton>
        </SubMenu>

        <SubMenuButton onClick={() => setSubMenuOpen3(!isSubMenuOpen3)}>
          Mais Opções 3
        </SubMenuButton>
        <SubMenu isOpen={isSubMenuOpen3}>
        <SubButton onClick={() => alert('Opção 1 clicada')}>Opção 1</SubButton>
          <SubButton onClick={() => alert('Opção 2 clicada')}>Opção 2</SubButton>
          <SubButton onClick={() => alert('Opção 3 clicada')}>Opção 3</SubButton>
        </SubMenu>
        <MenuTexto>Informativo:</MenuTexto>
        <MenuParagrafo>Projeto Iniciado dia 25.02</MenuParagrafo>
        <MenuParagrafo>Termino 26.02</MenuParagrafo>
        <ExternalLink href="https://www.techjuliana.com.br/" target="_blank" rel="noopener noreferrer">
        <MenuParagrafo>www.techjuliana.com.br</MenuParagrafo>
        </ExternalLink>
      </Sidebar>
      <PersonList people={people} onCardClick={handleCardClick} />
      <Modal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}>
        <PersonForm onSave={handleAddPerson} />
      </Modal>
      <Modal isOpen={isDetailModalOpen} onClose={() => setDetailModalOpen(false)}>
        {selectedPerson && (
          <PersonForm person={selectedPerson} onSave={handleUpdatePerson} />
        )}
      </Modal>
    </AppContainer>
  );
};

export default App;