import styled from 'styled-components';
import { FiUserPlus } from 'react-icons/fi';
export const DisplayContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  gap: 20px;
  padding: 20px;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px rgba(0, 0, 0, 0.08);
`;

export const ColouredText = styled.div`
  color: blue;
  text-align: start;
`;
export const BoldText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
export const NameContainer = styled.div``;
export const Name = styled.div`
  padding-bottom: 5px;
`;

export const ExtraDetailsContainer = styled.div`
  margin: 0 auto;
  background-color: #58abdf;
  border-radius: 10px;
  padding: 40px 0px;
  color: white;
`;

export const InnerExtraDetails = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  color: black;
  @media (max-width: 375px) {
    padding: 10px;
  }
`;

export const ExtraApplicationDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-around;

  @media (max-width: 376px) {
    gap: 30px;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 12px;
  }
  @media (max-width: 426px) {
    gap: 30px;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 12px;
  }
`;

export const LogInIcon = styled(FiUserPlus)`
  color: blue;
`;
export const Heading = styled.h2`
  font-size: 14px;
  @media (max-width: 376px) {
    font-size: 12px;
  }
`;
