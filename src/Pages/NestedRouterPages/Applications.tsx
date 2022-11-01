import React from 'react';

import {
  Heading,
  PersonList,
  Container,
} from '../MainRouterPages/Application/ApplicationStyle';

import { useEffect } from 'react';
import { personDetails } from '../../data/CardDetails';
import SearchDisplay from '../../components/dashboard/SearchDisplayApp';
import { mapPersons } from '../../utils/mapPersons';
import { useContext } from 'react';
import { CartContext } from '../../components/hooks/context';
import SearchBox from '../../components/common/SearchComponent/SearchBox';

const ApplicationsNested = (props: any) => {
  const { text, setText } = useContext(CartContext);
  const { persons, setPersons } = useContext(CartContext);
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
      <SearchBox />
      <PersonList>
        {displayPersons.length !== 0 &&
          displayPersons.map((person: any, i: any) => {
            return (
              <SearchDisplay
                key={person.personId}
                personId={person.personId}
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
