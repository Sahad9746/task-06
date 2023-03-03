import React from "react";
import styled from "styled-components";
import suryan from "../Assets/sun.svg"
import fire from "../Assets/fire.svg";
import game from "../Assets/gaming.svg";

export default function Dashboard() {
  return (
    <DashboardSection>
      <HotSection>
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
      </HotSection>
    </DashboardSection>
  );
}
const DashboardSection = styled.div`
  width: 74%;
  background-color: #ffff;
`;
const HotSection = styled.section`
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
border: 1px solid #000;
margin-top: 50px;

`;
const SecondDivision = styled.div` 
`;
const FourthDivision = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 0;
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
padding: 15px;

`;
const Imagecon = styled.div`
width: 30px;
`;
const SunImg = styled.img`
width: 100%;
display: block;
`;
const MonyExe = styled.p`
font-size: 26px;
font-weight: 600;
`;
const Summersec = styled.h4`
font-size: 12px;
font-weight: 200;
`;
