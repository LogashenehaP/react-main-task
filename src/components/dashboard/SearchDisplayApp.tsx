import {
  DisplayContainer,
  BoldText,
  ColouredText,
  NameContainer,
  Name,
  ExtraDetailsContainer,
  InnerExtraDetails,
  ExtraApplicationDetails,
  LogInIcon,
} from './SearchDisplayStyle';
import { FiUserPlus, FiUserX } from 'react-icons/fi';
import DownArrowImage from '../../../src/assets/images/down-arrow.png';
import { useState } from 'react';
import { Heading } from '../common/Display/Application/ApplicationStyle';
import { extraDetails } from '../../resources/String';
interface AppProps {
  name: string;
  progress: string;
  access: string;
  accountNo: string;
  image: string;
  arrowImage: string;
  arrowUpImage: string;
  date: string;
  coreAccess: string;
  dateText: string;
  zipCode: number;
  pdfImage: string;
  emailImage: string;
  createImage: string;
}
const SearchDisplay: React.FC<AppProps> = ({
  name,
  progress,
  access,
  image,
  accountNo,
  arrowImage,
  date,
  coreAccess,
  dateText,
  arrowUpImage,
  zipCode,
  pdfImage,
  emailImage,
  createImage,
}: AppProps) => {
  const [openDetails, setOpenDetails] = useState(false);
  const toggle = () => {
    setOpenDetails(!openDetails);
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
          <ColouredText>{progress}</ColouredText>
        </NameContainer>
        <BoldText>
          <div>{access}</div>
          <div>{coreAccess}</div>
        </BoldText>
        <div>
          <BoldText>{date}</BoldText>
          <div>{dateText}</div>
        </div>
        <div>
          <ColouredText>{accountNo}</ColouredText>
          <div>ACN No.</div>
        </div>
        <div>
          <img src={image} alt="" />
          <div>Action needed</div>
        </div>
      </DisplayContainer>
      <div>
        {openDetails && (
          <>
            <ExtraDetailsContainer>
              <InnerExtraDetails>
                <Heading>Application Status Details</Heading>
                <ExtraApplicationDetails>
                  <div>
                    <BoldText>{date}</BoldText>
                    <div>Date of Birth</div>
                  </div>
                  <div>
                    <BoldText>{zipCode}</BoldText>
                    <div>Zipcode</div>
                  </div>
                  <div>
                    <BoldText>xxxxxxxxxxxxx</BoldText>
                    <div>Country</div>
                  </div>
                  <div>
                    <BoldText>{date}</BoldText>
                    <div>Date Updated</div>
                  </div>
                  <div>
                    <img src={pdfImage} />
                    <div>PDF</div>
                  </div>
                  <div>
                    <BoldText>N/A</BoldText>
                    <div>Welcome Kit Mailed</div>
                  </div>
                  <div>
                    <BoldText>N/A</BoldText>
                    <div>ID Card Mailed</div>
                  </div>
                  <div>
                    <LogInIcon />
                    <div>Recall (Delegate)</div>
                  </div>
                  <div>
                    <LogInIcon />
                    <div>Transfer (Customer)</div>
                  </div>

                  <div>
                    <img src={createImage} />
                    <div>HRA</div>
                  </div>
                  <div>
                    <div>-{extraDetails.reasonOne}</div>
                    <div>-{extraDetails.reasonTwo}</div>
                    <div>-{extraDetails.reasonThree}</div>
                    <div>-{extraDetails.reasonFour}</div>
                  </div>
                  <div>
                    <img src={emailImage} />
                    <div>Respond RFI</div>
                  </div>
                </ExtraApplicationDetails>
              </InnerExtraDetails>
            </ExtraDetailsContainer>
          </>
        )}
      </div>
    </>
  );
};

export default SearchDisplay;
