import React, { useCallback } from 'react';
import {
  PageCountContainer,
  ButtonBox,
  ButtonContainer,
} from '../../../Pages/MainRouterPages/Application/ApplicationStyle';

import {
  Page,
  PageInput,
  InputAndButtonContainer,
  InputContainer,
  Select,
  InputBox,
  SearchSpace,
  SearchIcon,
} from '../../../Pages/MainRouterPages/Application/ApplicationStyle';

import { CartContext } from '../../hooks/context';
import { useContext } from 'react';

const SearchBox = () => {
  const { text, setText } = useContext(CartContext);
  console.log('search');
  return (
    <div>
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
    </div>
  );
};

export default React.memo(SearchBox);
