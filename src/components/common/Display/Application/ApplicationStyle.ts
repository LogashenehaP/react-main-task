import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch, FiUserX } from 'react-icons/fi';
export const ApplicationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  border-bottom: 3px solid grey;
  border-radius: 2px;
  width: 80%;
  margin: 0 auto;
  padding: 20px 0px;
  @media (max-width: 320px) {
 gap:10px;
 font-size:12px;

  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const SubContainer = styled.div`
  text-decoration: none;
  color: black;
`;
export const Heading = styled.h2`
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 13px;
  }

`;
export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.1); */
  gap: 10px;
`;
export const InputAndButtonContainer = styled.div`
  padding: 15px;
  margin-bottom: 50px;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.1);
`;
export const InputBox = styled.input`
  padding: 0;
  margin: 0;
  color: #4b4b4b;
  padding: 10px;
  outline: none;
  border: none;
  font-size: 14px;

  ::placeholder {
    color: #4b4b4b;
  }
  @media (max-width: 320px) {
 padding:0;

  }

`;
export const PageInput = styled.input`
  /* width:80px; */
  align-items: center;
  font-size: 14px;
  color: blue;
  border: 1px solid black;
  border-radius: 8px;
`;
export const SearchSpace = styled.div`
 
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  padding: 5px;
  margin: 10px;
  border: 1px solid black;
  color: #4b4b4b;
  border-radius: 8px;
  @media (max-width: 320px) {
width:100%;
justify-content:center;

  }
  @media (max-width: 376px) {
width:100%;
justify-content:center;

  }
  @media (max-width: 426px) {
width:100%;
justify-content:center;

  }

`;
export const PageCountContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
`;
export const Page = styled.div`
  font-weight: bold;
  padding-top: 6px;
  font-size: 14px;
`;
export const SearchIcon = styled(FiSearch)`
  padding-top: 9px;
`;
export const Select = styled.select`
  padding: 10px;
  margin: 0;
  color: #4b4b4b;
  outline: none;
  border: none;
  font-size: 14px;
  @media (max-width: 320px) {
 padding:0;

  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  font-size: 18px;
  padding: 5px;
  gap: 30px;
  margin: 10px;
  color: #4b4b4b;
  @media (max-width: 320px) {
justify-content:center;

  }
  @media (max-width: 376px) {
justify-content:center;

  }
  @media (max-width: 426px) {
justify-content:center;

  }
`;
export const PersonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ButtonBox = styled.button`
  /* width: 100px; */
  padding: 10px;
  background: white;
  border: 1px solid white;
  color: #286ce2;
  border-radius: 8px;
  &:hover {
    background: #286ce2;
    color: white;
  }
`;
export const DisplayContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
`;

export const Delete = styled.div`
  cursor: pointer;
`;
export const AddButton = styled.button`
  padding: 10px;
  background: #286ce2;
  border: 1px solid white;
  color: white;
  border-radius: 8px;
`;
export const RemoveIcon = styled(FiUserX)`
  color: #2348bd;
`;
export const PopUp = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  color: black;
  height: 150px;
  width: 250px;
  top: 50%;
  left: 50%;
  backdrop-filter: blur(8px);
  vertical-align: middle;
`;

export const PopUpButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;
export const PopUpHeading = styled.div`
  border-bottom: 2px solid lightblue;
`;
