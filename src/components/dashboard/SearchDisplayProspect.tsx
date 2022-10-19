import {
  DisplayContainer,
  BoldText,
  ColouredText,
  NameContainer,
  Name,
} from './SearchDisplayStyle';
import { RemoveIcon } from '../common/Display/Application/ApplicationStyle';
import { FiUserPlus, FiUserX } from 'react-icons/fi';
import DownArrowImage from '../../../src/assets/images/down-arrow.png';
import { useState } from 'react';

interface AppProps {
  name: string;
  accountNo: string;
  createImage: string;
  date: string;
  dateText: string;
  zipCode: number;
  descriptionImage: string;
}
const SearchDisplayProspect: React.FC<AppProps> = ({
  name,
  accountNo,
  date,
  dateText,
  createImage,
  zipCode,
  descriptionImage,
}: AppProps) => {
  return (
    <DisplayContainer>
      <NameContainer>
        <Name>{name}</Name>
      </NameContainer>
      <div>
        <BoldText>{date}</BoldText>
        <div>Date of Birth</div>
      </div>
      <div>
        <BoldText>{zipCode}</BoldText>
        <div>Zipcode</div>
      </div>
      <div>
        <img src={createImage} />
        <div>create new quote</div>
      </div>
      <div>
        <img src={descriptionImage} />
        <div>DSNP verification</div>
      </div>
      <div>
        <RemoveIcon />
        <div>remove</div>
      </div>
    </DisplayContainer>
  );
};

export default SearchDisplayProspect;

//#2348BD
