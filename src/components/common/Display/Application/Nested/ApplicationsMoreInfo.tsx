import React from 'react';
import {
  PageCountContainer,
  ButtonBox,
  ButtonContainer,
} from '../ApplicationStyle';
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
} from '../ApplicationStyle';
import { PersonModel } from '../../../../../model/PersonModel';
import { useEffect, useState } from 'react';
import CardDetails, { personDetails } from '../../../../../data/CardDetails';
import SearchDisplay from '../../../../dashboard/SearchDisplayApp';
import { mapPersons } from '../../../../utils/mapPersons';
import SearchDisplayMoreInfo from '../../../../dashboard/SearchDisplayMoreInfo';
function ApplicationMoreInfo() {
  const [text, setText] = useState<string>('');
  const [persons, setPersons] = useState<PersonModel[] | null>(null);
  const [openDetails, setOpenDetails] = useState(false);
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

  return (
    <Container>
      <h2>Application requiring more information</h2>
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
            <ButtonBox>Search</ButtonBox>
            <ButtonBox>clear</ButtonBox>
          </div>
          <PageCountContainer>
            <Page>page</Page>
            <PageInput type="number"></PageInput>
          </PageCountContainer>
        </ButtonContainer>
      </InputAndButtonContainer>
      <PersonList>
        {persons.length == 0 && (
          <Heading>
            You currently do not have any electronic applications that requires
            more information.
          </Heading>
        )}
        {displayPersons.length !== 0 &&
          displayPersons.map((person, i) => {
            return (
              <SearchDisplayMoreInfo
                key={i}
                arrowImage={person.arrowImage}
                arrowUpImage={person.arrowUpImage}
                name={person.name}
                accountNo={person.accountNo}
                date={person.date}
                emailImage={person.emailImage}
                pdfImage={person.pdfImage}
              />
            );
          })}
        {displayPersons.length === 0 && <Heading>No Persons Found</Heading>}
      </PersonList>
    </Container>
  );
}

export default ApplicationMoreInfo;
