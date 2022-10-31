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
import { personDetails } from '../../../../../data/CardDetails';
import SearchDisplay from '../../../../dashboard/SearchDisplayApp';
import { mapPersons } from '../../../../utils/mapPersons';
const ApplicationsNested = (props: any) => {
  const [text, setText] = useState<string>('');
  const [persons, setPersons] = useState<PersonModel[] | null>(null);
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
      <Heading>Manage Applications</Heading>
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
      <h3>{props.displayPersons}</h3>
      <PersonList>
        {displayPersons.length !== 0 &&
          displayPersons.map((person, i) => {
            return (
              <SearchDisplay
                key={i}
                arrowImage={person.arrowImage}
                arrowUpImage={person.arrowUpImage}
                name={person.name}
                progress={person.progressStatus}
                access={person.accessDetails}
                accountNo={person.accountNo}
                image={person.image}
                date={person.date}
                coreAccess={person.coreAccess}
                dateText={person.dateText}
                zipCode={person.zipCode}
                emailImage={person.emailImage}
                pdfImage={person.pdfImage}
                createImage={person.createImage}
              />
            );
          })}
        {displayPersons.length === 0 && <Heading>No Persons Found</Heading>}
      </PersonList>
    </Container>
  );
};

export default ApplicationsNested;
