import React from "react";
import styled from "styled-components";
import suryan from "../Assets/sun.svg"
import fire from "../Assets/fire.svg";
import game from "../Assets/gaming.svg";
import { statistic } from "antd/es/theme/internal";
import uper from "../Assets/Property 1=up-arrow.svg"
import linegraph from "../Assets/graph1.png"
import down from "../Assets/down.svg"

export default function Dashboard() {
  return (
    <DashboardSection>
      <LeftSection>
        <CardSection>
          <ColdHeading>DashboardSection</ColdHeading>
          <Static>
            <SubList>
              <SubListItem>
                <FirstDom>Available amount</FirstDom>
                <Dollor>$6,550</Dollor>
              </SubListItem>
              <SubListItem>
                <Line />
              </SubListItem>
              <SubListItem>
                <FirstDom>Card Balance</FirstDom>
                <Dollor>$4,208</Dollor>
              </SubListItem>
              <SubListItem>
                <Line />
              </SubListItem>
              <SubListItem>
                <FirstDom>credit limit</FirstDom>
                <Dollor>$20,000</Dollor>
              </SubListItem>
            </SubList>
          </Static>
        </CardSection>
        {/* crad section ed here */}
        {/* Savings section start here */}
        <SecondContainer>
          <SecondDivision>
            <FourthDivision>
              <Lefthead>Saving</Lefthead>
              <Righthead>Total 5 Walets</Righthead>
            </FourthDivision>
            <FifthDivision>
              <BoxList>
                <BoxListItem>
                  <Imagecon>
                    <SunImg src={suryan} alt="Sun" />
                  </Imagecon>
                  <MonyExe>$2250</MonyExe>
                  <Summersec>Summer trip</Summersec>
                </BoxListItem>
                <BoxListItem>
                  <Imagecon>
                    <SunImg src={fire} alt="fire" />
                  </Imagecon>
                  <MonyExe>$2250</MonyExe>
                  <Summersec>Summer trip</Summersec>
                </BoxListItem>
                <BoxListItem>
                  <Imagecon>
                    <SunImg src={game} alt="game" />
                  </Imagecon>
                  <MonyExe>$2250</MonyExe>
                  <Summersec>Summer trip</Summersec>
                </BoxListItem>
              </BoxList>
            </FifthDivision>
          </SecondDivision>
        </SecondContainer>
        {/* Saving ssection end here */}
        <StatiStics>
                <TopContainer>
                    <HeadingStatic>Statistics</HeadingStatic>
                    <Select>
                        <option>March 2022</option>
                        <option>April 2022</option>
                        <option>May 2022</option>
                        <option>June 2022</option>
                    </Select>
                </TopContainer>
                <StaticItems>
                    <StaticList>
                        <UpArrow>
                            <UpImage src={uper} alt="uparrow" />
                        </UpArrow>
                        <Incom>Total income $235</Incom>
                        <ColorBlue></ColorBlue>
                        <BackGroundImg>
                            <GraphImg src={linegraph} alt="Graphone" />
                        </BackGroundImg>
                        <Plus>+20%</Plus>
                    </StaticList>
                    <StaticList>
                        <UpArrow>
                            <UpImage src={uper} alt="uparrow" />
                        </UpArrow>
                        <Incom>Total income $235</Incom>
                        <ColorGreen></ColorGreen>
                        <BackGroundImg>
                            <GraphImg src={linegraph} alt="Graphone" />
                        </BackGroundImg>
                        <PlusT>+8%</PlusT>
                    </StaticList>
                    <StaticList>
                        <UpArrow>
                            <UpImage src={down} alt="uparrow" />
                        </UpArrow>
                        <Incom>Total income $235</Incom>
                        <ColorRed></ColorRed>
                        <BackGroundImg>
                            <GraphImg src={linegraph} alt="Graphone" />
                        </BackGroundImg>
                        <PlusTo>-18%</PlusTo>
                    </StaticList>
                </StaticItems>
            </StatiStics>
      </LeftSection>
    </DashboardSection>
  );
}
const DashboardSection = styled.div`
  width: 74%;
  background-color: #ffff;
  
`;
const LeftSection = styled.section`
  width: 50%;
  background: #e0e0e0;
  padding: 10px;
`;
const CardSection = styled.div``;
const Line = styled.hr`
  border-left: 1px solid #fff;
  height: 20px;
  
`;
const ColdHeading = styled.h1``;
const SubList = styled.ul`
  margin-top: 20px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  height: 100px;
`;
const Static = styled.div``;
const SubListItem = styled.li`
  margin: 0 auto;
`;
const FirstDom = styled.h2`
  color: #fff;
  font-size: 10px;
  padding: 10px 0;
  text-transform: uppercase;
`;
const Dollor = styled.p`
  color: #fff;
  font-size: large;
`;
const SecondContainer = styled.section` 
box-shadow: 1px 1px 2px 0px rgba(161,161,161,1);
border-radius: 6px;
margin-top: 35px;
padding: 15px;

`;
const SecondDivision = styled.div` 
`;
const FourthDivision = styled.div`
display: flex;
justify-content: space-between;
padding: 0 0 20px ;
`;
const Lefthead = styled.h3`
font-size: 22px;
font-weight: 600;
`;
const Righthead = styled.h3`
font-size: 15px;
font-weight: 300;
`;
const FifthDivision = styled.div`
`;
const BoxList = styled.ul`
display: flex;
justify-content: space-between;
`;
const BoxListItem = styled.li`
    background: #fec0a7 ;
    padding: 15px;
    width: 30%;
    border-radius: 7px;
    &:hover {
      transform: scale(1.1);
      transition-duration: 0.8s;
      cursor: pointer;
    }
    &:nth-child(2) {
      background-color: #98bde5;
    }
    &:last-child  {
      background-color: #98dbe5;
    }

`;
const Imagecon = styled.div`
width: 30px;
padding-bottom:25px ;
`;
const SunImg = styled.img`
width: 100%;
display: block;
`;
const MonyExe = styled.p`
font-size: 26px;
font-weight: 600;
padding-bottom: 5px;
`;
const Summersec = styled.h4`
font-size: 12px;
font-weight: 400;
`;
// statistic section
const StatiStics = styled.section``;
const TopContainer = styled.div``;
const HeadingStatic = styled.h2``;
const Select = styled.select``;
const StaticItems = styled.ul``;
const StaticList = styled.li``;
const UpArrow = styled.div``;
const UpImage = styled.img``;
const Incom = styled.p``;
const ColorBlue = styled.div``;
const ColorGreen = styled.div``;
const ColorRed = styled.div``;
const BackGroundImg = styled.div``;
const GraphImg = styled.img``;
const PlusTo = styled.h3``;
const PlusT = styled.h3``;
const Plus = styled.h3``;
