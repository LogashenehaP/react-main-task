import React from 'react';
import { Link } from 'react-router-dom';
import {
  Text,
  CardContainer,
  BodyContainer,
  CardItem,
  OverflowContainer,
  Heading,
  NewContainer,
  NewSubContainer,
  ToolList,
} from './HomeStyle';
import CardDetails from '../../../data/CardDetails';
import { image } from '../../../resources/Images';
import { newContent } from '../../../resources/String';
import FooterComponent from '../../../components/common/Footer/FooterComponent';
const Home = () => {
  return (
    <>
      <BodyContainer>
        <CardContainer>
          {CardDetails.map((item, i) => {
            return (
              <CardItem key={item.cardId}>
                <div>
                  <img src={item.image}></img>
                </div>
                <Heading>{item.heading}</Heading>
                <div>{item.text}</div>
              </CardItem>
            );
          })}
        </CardContainer>
      </BodyContainer>
      <NewContainer>
        <NewSubContainer>
          <h3>Whats New!</h3>
          <OverflowContainer>
            Available New shorter Health Risk Assessment (HRA) forms can be
            completed upon enrollment submission. (Link in submission
            confirmation) Care Guide link to be available in enrollment
            submission confirmation page for MA/MAPD (except ISNP/CSNP)
            applications. Starting 10/09 schedule your Care Guide call using the
            Available New shorter Health Risk Assessment (HRA) forms can be
            completed upon enrollment submission. (Link in submission
            confirmation) Care Guide link to be available in enrollment
            submission confirmation page for MA/MAPD (except ISNP/CSNP)
            applications. Starting 10/09 schedule your Care Guide call using the
          </OverflowContainer>
        </NewSubContainer>
        <NewSubContainer>
          <ToolList>
            <img src={image.settingTool} />
            <div>{newContent.settingTool}</div>
          </ToolList>
          <ToolList>
            <img src={image.settingTool} />
            <div>{newContent.producerTool}</div>
          </ToolList>
          <ToolList>
            <img src={image.settingTool} />
            <div>{newContent.salesTool}</div>
          </ToolList>
          <ToolList>
            {' '}
            <img src={image.settingTool} />
            <div>{newContent.medicareTool}</div>
          </ToolList>
        </NewSubContainer>
      </NewContainer>
      <FooterComponent />
    </>
  );
};

export default Home;
