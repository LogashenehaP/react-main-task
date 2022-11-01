import React from 'react';

import {
  Heading,
  PersonList,
  Container,
} from '../MainRouterPages/Application/ApplicationStyle';

import { useContext } from 'react';
import { CartContext } from '../../components/hooks/context';
import { useEffect } from 'react';
import{ personDetails } from '../../data/CardDetails';
import { mapPersons } from '../../utils/mapPersons';
import SearchDisplayMoreInfo from '../../components/dashboard/SearchDisplayMoreInfo';
import SearchBox from '../../components/common/SearchComponent/SearchBox';
const ApplicationMoreInfo = () => {
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
      <h2>Application requiring more information</h2>
      <SearchBox />
      <PersonList>
        {persons.length == 0 && (
          <Heading>
            You currently do not have any electronic applications that requires
            more information.
          </Heading>
        )}
        {displayPersons.length !== 0 &&
          displayPersons.map((person: any, i: any) => {
            return (
              <SearchDisplayMoreInfo
                key={person.personId}
                personId={person.personId}
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
};

export default ApplicationMoreInfo;
