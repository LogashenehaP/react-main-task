import React, { useCallback, useMemo } from 'react';

import { FiUserPlus } from 'react-icons/fi';
import { Modal } from '../MainRouterPages/Application/ApplicationStyle';
import {
  PageCountContainer,
  ButtonBox,
  ButtonContainer,
  AddButton,
  PopUpButtonContainer,
  PopUpHeading,
} from '../MainRouterPages/Application/ApplicationStyle';
import { Delete } from '../MainRouterPages/Application/ApplicationStyle';
import {
  DisplayContainer,
  BoldText,
  NameContainer,
  Name,
} from '../../components/dashboard/SearchDisplayStyle';
import {
  Heading,
  PersonList,
  Container,
  PopUp,
} from '../MainRouterPages/Application/ApplicationStyle';
import { RemoveIcon } from '../MainRouterPages/Application/ApplicationStyle';
import { useEffect, useState } from 'react';
import { personDetails } from '../../data/CardDetails';
import { mapPersons } from '../../utils/mapPersons';
import { useContext } from 'react';
import { CartContext } from '../../components/hooks/context';
import SearchBox from '../../components/common/SearchComponent/SearchBox';

const Prospect = () => {
  const { text, setText } = useContext(CartContext);
  const { persons, setPersons } = useContext(CartContext);
  const [popUp, setPopUp] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  let index: number;
  const handleChange = useCallback(
    (personId: number) => {
      index = personId;
      setIsRemove(!isRemove);
    },
    [popUp]
  );
  useEffect(() => {
    const mappedPersons = mapPersons(personDetails);
    setPersons(mappedPersons);
  }, []);
  if (persons === null) return <Heading>loading</Heading>;
  let displayPersons = persons;
  if (text !== null) {
    const duplicatePersons = [...displayPersons];
    displayPersons = duplicatePersons.filter((person) =>
      person.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  const newList = displayPersons;
  const deleteToDo = (index: number) => {
    newList.splice(index, 1);
    setPersons([...newList]);
    setPopUp(!popUp);
    setIsRemove(!isRemove);
  };

  return (
    <Container>
      <h2>Prospects</h2>
      <SearchBox />
      {isRemove && (
        <>
          <Modal>
            <PopUp>
              <PopUpHeading>
                <Heading>Remove Customer</Heading>
              </PopUpHeading>
              <div>are you sure you would like to remove the customer?</div>
              <PopUpButtonContainer>
                <AddButton onClick={() => setIsRemove(false)}>Cancel</AddButton>
                <AddButton onClick={() => deleteToDo(index)}>Ok</AddButton>
              </PopUpButtonContainer>
            </PopUp>
          </Modal>
        </>
      )}
      <PersonList>
        {displayPersons.length !== 0 &&
          displayPersons.map((person: any, i: any) => {
            return (
              <DisplayContainer key={person.personId}>
                <NameContainer>
                  <Name>{person.name}</Name>
                </NameContainer>
                <div>
                  <BoldText>{person.date}</BoldText>
                  <div>Date of Birth</div>
                </div>
                <div>
                  <BoldText>{person.zipCode}</BoldText>
                  <div>Zipcode</div>
                </div>
                <div>
                  <img src={person.createImage} />
                  <div>create new quote</div>
                </div>
                <div>
                  <img src={person.descriptionImage} />
                  <div>DSNP verification</div>
                </div>
                <div>
                  <RemoveIcon />
                  <Delete
                    onClick={() => {
                      handleChange(person.personId);
                    }}
                  >
                    remove
                  </Delete>
                </div>
              </DisplayContainer>
            );
          })}
        {displayPersons.length === 0 && <Heading>No Persons Found</Heading>}
      </PersonList>
    </Container>
  );
};

export default Prospect;
