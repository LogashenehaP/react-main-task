import React from 'react';

import { FiUserPlus } from 'react-icons/fi';
import { Modal } from '../ApplicationStyle';
import {
  PageCountContainer,
  ButtonBox,
  ButtonContainer,
  AddButton,
  PopUpButtonContainer,
  PopUpHeading,
} from '../ApplicationStyle';
import { Delete } from '../ApplicationStyle';
import {
  DisplayContainer,
  BoldText,
  ColouredText,
  NameContainer,
  Name,
} from '../../../../dashboard/SearchDisplayStyle';
import {
  Heading,
  PersonList,
  Page,
  PageInput,
  Container,
  InputAndButtonContainer,
  InputContainer,
  Select,
  InputBox,
  SearchSpace,
  SearchIcon,
  PopUp,
} from '../ApplicationStyle';
import { RemoveIcon } from '../ApplicationStyle';
import { PersonModel } from '../../../../../model/PersonModel';
import { useEffect, useState } from 'react';
import { personDetails } from '../../../../../data/CardDetails';
import { mapPersons } from '../../../../utils/mapPersons';

function Prospect() {
  const [text, setText] = useState<string>('');
  const [persons, setPersons] = useState<PersonModel[] | null>(null);
  const [popUp, setPopUp] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  let index: number;
  function handleChange(i: number) {
    index = i;
    setIsRemove(!isRemove);
  }
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
  const deleteToDo = (a: number) => {
    newList.splice(a, 1);
    setPersons([...newList]);
    setPopUp(!popUp);
    setIsRemove(!isRemove);
  };

  return (
    <Container>
      <h2>Prospects</h2>
      <InputAndButtonContainer>
        <InputContainer>
          <SearchSpace>
            <InputBox
              type="text"
              placeholder="Search First name"
              onChange={(e) => setText(e.target.value)}
            ></InputBox>
            <SearchIcon />
          </SearchSpace>
          <SearchSpace>
            <InputBox
              type="text"
              placeholder="Search Last name"
              onChange={(e) => setText(e.target.value)}
            />
            <SearchIcon />
          </SearchSpace>

          <SearchSpace>
            <Select>
              <option>select an option</option>
              <option value="1">yes</option>
              <option value="2">no</option>
            </Select>
          </SearchSpace>
          <SearchSpace>
            <InputBox type="date"></InputBox>
          </SearchSpace>
        </InputContainer>
        <ButtonContainer>
          <div>
            <AddButton>
              New Prospect <FiUserPlus />
            </AddButton>
          </div>
          <PageCountContainer>
            <Page>page</Page>
            <PageInput type="number"></PageInput>
          </PageCountContainer>
        </ButtonContainer>
      </InputAndButtonContainer>
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
          displayPersons.map((person, i) => {
            let a = i;
            return (
              <>
                <DisplayContainer>
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
                        //modalPopUp(i);
                        // deleteToDo(i);
                        handleChange(i);
                      }}
                    >
                      remove
                    </Delete>
                  </div>
                </DisplayContainer>
              </>
            );
          })}
        {displayPersons.length === 0 && <Heading>No Persons Found</Heading>}
      </PersonList>
    </Container>
  );
}

export default Prospect;
