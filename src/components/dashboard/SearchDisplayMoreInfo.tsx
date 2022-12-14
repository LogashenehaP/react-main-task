import {
  DisplayContainer,
  BoldText,
  ColouredText,
  NameContainer,
  Name,
  ExtraDetailsContainer,
  InnerExtraDetails,
} from './SearchDisplayStyle';
import { extraDetails } from '../../resources/String';
import { RemoveIcon } from '../../Pages/MainRouterPages/Application/ApplicationStyle';
import { FiBold, FiUserPlus, FiUserX } from 'react-icons/fi';
import DownArrowImage from '../../../src/assets/images/down-arrow.png';
import { useCallback, useState } from 'react';
import { PersonModel } from '../../model/PersonModel';
interface AppProps {
  name: string;
  accountNo: string;
  date: string;
  pdfImage: string;
  emailImage: string;
  arrowImage: string;
  arrowUpImage: string;
  personId: number;
}
const SearchDisplayMoreInfo: React.FC<AppProps> = ({
  name,
  accountNo,
  date,
  emailImage,
  arrowImage,
  arrowUpImage,
  pdfImage,
  personId,
}: AppProps) => {
  const [openDetails, setOpenDetails] = useState(false);
  const toggle = () => {
    setOpenDetails(!openDetails);
    console.log("toggle");
  };
  return (
    <>
      <DisplayContainer>
        <div>
          <div onClick={toggle}>
            {openDetails ? (
              <>
                <img src={arrowUpImage}></img>
              </>
            ) : (
              <img src={arrowImage}></img>
            )}
          </div>
        </div>
        <NameContainer>
          <Name>{name}</Name>
        </NameContainer>
        <div>
          <BoldText>Account</BoldText>
          <div>{accountNo}</div>
        </div>
        <div>
          <BoldText>{date}</BoldText>
          <div>Last updated</div>
        </div>
        <div>
          <img src={emailImage} />
          <ColouredText>respond</ColouredText>
        </div>
        <div>
          <img src={pdfImage} />
          <ColouredText>PDF</ColouredText>
        </div>
      </DisplayContainer>
      <div>
        {openDetails && (
          <>
            <ExtraDetailsContainer>
              <InnerExtraDetails>
                <h2>{extraDetails.extraDetailsTopic}</h2>
                <div>-{extraDetails.reasonOne}</div>
                <div>-{extraDetails.reasonTwo}</div>
                <div>-{extraDetails.reasonThree}</div>
                <div>-{extraDetails.reasonFour}</div>
              </InnerExtraDetails>
            </ExtraDetailsContainer>
          </>
        )}
      </div>
    </>
  );
};

export default SearchDisplayMoreInfo;

//#2348BD
