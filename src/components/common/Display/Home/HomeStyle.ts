import styled from 'styled-components';

export const Text = styled.div`
  color: blue;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: 'row';
  position: relative;
  justify-content: 'space-around';
  padding: 30px;
  background-color: #2453a6;
  height: 130px;
`;

export const CardItem = styled.div`
  padding: 15px;
  color: #4a4a4a;
  font-size: 14px;
  box-shadow: 0 16px 32px 0 rgba(33, 28, 28, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: white;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 320px) {
    font-size: 12px;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 50px;
  right: 50px;
  top: 100px;
  display: flex;
  justify-content: 'space-around';
  gap: 20px;

  @media (max-width: 768px) {
    left: 10px;
    right: 10px;
    gap: 10px;
  }
  @media (max-width: 375px) {
    top: 60px;
    flex-wrap: wrap;
    margin: 20px;
  }
`;

export const Heading = styled.h3`
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const NewContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  position: absolute;
  top: 370px;
  display: flex;
  left: 80px;
  justify-content: 'space-around';
  padding: 33px;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 10px;
    left: 45px;
    top: 420px;
    margin: 0 auto;
  }
  @media (max-width: 375px) {
    padding: 10px;
    left: 10px;
    right: 10px;
    flex-wrap: wrap;
    top: 730px;

    margin: 0 auto;
  }
  @media (max-width: 320px) {
    top: 760px;
  }
`;
export const NewSubContainer = styled.div`
  width: 48%;
  padding: 20px;
  height: 166px;
  background-color: rgba(74, 74, 74, 0.05);
  @media (max-width: 375px) {
    width: 100%;
    justify-content: center;
    height: 220px;
  }
`;
export const OverflowContainer = styled.div`
  overflow-y: scroll;
  height: 100px;
  scrollbar-width: thin;
  @media (max-width: 375px) {
font-size:12px;
  }
`;
export const ToolList = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  @media (max-width: 375px) {
font-size:12px;
  }
`;
