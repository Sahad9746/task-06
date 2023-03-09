import React from "react";
import { useState } from "react";
import styled from "styled-components";
import suryan from "../Assets/sun.svg";
import fire from "../Assets/fire.svg";
import game from "../Assets/gaming.svg";
import { statistic } from "antd/es/theme/internal";
import uper from "../Assets/Property 1=up-arrow.svg";
import linegraph from "../Assets/graph1.png";
import down from "../Assets/down.svg";
import Search from "antd/es/transfer/search";
import lens from "../Assets/len.svg";
import grahp from "../Assets/graph.png";
import dot from "../Assets/dot.svg";
import Modal from "./modals/Modal"

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <DashboardSection>
      <LeftSection>
        <CardSection>
          <ColdHeading>Dashboard</ColdHeading>
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
              <div>
                <Righthead onClick={() => setShowModal(true)}>
                Total 5 Walets
                </Righthead>
                {showModal && (
                <Modal
                close={setShowModal}
                />
                )}
                {/* <button onClick={() => setShowModal(false)}>close</button> */}
                {/* {showModal && (
                // <button onClick={() => setShowModal}>close</button> )} */}
              </div>
              
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
        {/* Statistics section start here */}
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
              <Totel>
                <Incom>Total income</Incom>
                <Price> $235</Price>
              </Totel>
              <BackGroundImg>
                <ColorBlue></ColorBlue>
                {/* <GraphImg src={linegraph} alt="Graphone" /> */}
              </BackGroundImg>
              <Plus>+20%</Plus>
            </StaticList>
            <StaticList>
              <UpArrow>
                <UpImage src={uper} alt="uparrow" />
              </UpArrow>
              <Totel>
                <Incom>Total income</Incom>
                <Price> $235</Price>
              </Totel>
              <BackGroundImg>
                <ColorGreen></ColorGreen>
                {/* <GraphImg src={linegraph} alt="Graphone" /> */}
              </BackGroundImg>
              <PlusT>+08%</PlusT>
            </StaticList>
            <StaticList>
              <UpArrow>
                <UpImage src={down} alt="uparrow" />
              </UpArrow>
              <Totel>
                <Incom>Total income</Incom>
                <Price> $235</Price>
              </Totel>
              <BackGroundImg>
                <ColorRed></ColorRed>
                {/* <GraphImg src={linegraph} alt="Graphone" /> */}
              </BackGroundImg>
              <PlusTo>-08%</PlusTo>
            </StaticList>
          </StaticItems>
        </StatiStics>
        {/* StatiStics section End here */}
      </LeftSection>
      {/* left section end here  */}
      {/* Right section start here  */}
      <RightSection>
        <TopSearch>
          <SearchLen to="/Ooops">
            <LensImg src={lens} alt="lens" />
          </SearchLen>
          <SearchBar>
            <SearchPut
              type="text"
              placeholder="Search document,keywords etc..."
            />
          </SearchBar>
        </TopSearch>
        <GraphSection>
          <AnelyticDiv>
            <Anelytic>Analytics</Anelytic>
            <BlackDot></BlackDot>
            <InCom>Income</InCom>
            <GreenDot></GreenDot>
            <Savi>Saving</Savi>
          </AnelyticDiv>
          <SecDivImg>
            <SecDivImage src={grahp} alt="Graph" />
          </SecDivImg>
        </GraphSection>
        {/* Graph section end */}
        {/* Transaction section starting */}
        <TarnsactionSection>
          <TopContainerTar>
            <HeadingTra>Transaction</HeadingTra>
            <SeLect>
              <option>March 2022</option>
              <option>April 2022</option>
              <option>May 2022</option>
              <option>June 2022</option>
            </SeLect>
          </TopContainerTar>
          <TransItems>
            <TransList>
              <Up>
                <Upimage src={down} alt="downimg" />
              </Up>
              <NextD>
                <Month>Monthly Groceries</Month>
                <Times>3Apr 2022 at 3.15 pm</Times>
              </NextD>
              <Plusw>+$2,20</Plusw>
              <DottedM>
                <DottedIM src={dot} alt="Dots" />
              </DottedM>
            </TransList>
            <TransList>
              <Up>
                <Upimage src={uper} alt="uparrow" />
              </Up>
              <NextD>
                <Month>Zabka Cashback</Month>
                <Times>3Apr 2022 at 3.15 pm</Times>
              </NextD>
              <Plust>+$220</Plust>
              <DottedM>
                <DottedIM src={dot} alt="Dots" />
              </DottedM>
            </TransList>
            <TransList>
              <UpArrow>
                <Upimage src={uper} alt="uparrow" />
              </UpArrow>
              <NextD>
                <Month>Transfer to card</Month>
                <Times>3Apr 2022 at 3.15 pm</Times>
              </NextD>
              <PlusW>+$80</PlusW>
              <DottedM>
                <DottedIM src={dot} alt="Dots" />
              </DottedM>
            </TransList>
          </TransItems>
        </TarnsactionSection>
      </RightSection>
    </DashboardSection>
  );
}
const DashboardSection = styled.div`
  width: 74%;
  background-color: #ffff;
  display: flex;
`;
const LeftSection = styled.section`
  width: 50%;
  padding: 10px;
`;
const CardSection = styled.div``;
const Line = styled.hr`
  border-left: 1px solid #fff;
  height: 20px;
`;
const ColdHeading = styled.h1`
  font-weight: 700;
  font-size: 25px;
`;
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
  box-shadow: 0px 0px 1px 0px rgba(161, 161, 161, 1);
  border-radius: 6px;
  margin-top: 35px;
  padding: 15px;
`;
const SecondDivision = styled.div``;
const FourthDivision = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 20px;
`;
const Lefthead = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const Righthead = styled.button`
  font-size: 15px;
  font-weight: 300;
  cursor:pointer;
`;
const FifthDivision = styled.div``;
const BoxList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const BoxListItem = styled.li`
  background: #fec0a7;
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
  &:last-child {
    background-color: #98dbe5;
  }
`;
const Imagecon = styled.div`
  width: 30px;
  padding-bottom: 25px;
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
// Saving section End here
// statistic section
const StatiStics = styled.section`
  padding: 15px;
  box-shadow: rgb(161 161 161) 0px 0px 1px 0px;
  border-radius: 6px;
  margin-top: 15px;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeadingStatic = styled.h2`
  padding: 0 0 20px 0px;
`;
const Select = styled.select`
  border: 1px solid #747474;
  padding: 2px 14px;
  border-radius: 23px;
  color: #747474;
  height: 33px;
`;
const StaticItems = styled.ul``;
const StaticList = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0px 0 10px;
`;
const UpArrow = styled.div`
  width: 55px;
  background: #000;
  border-radius: 5px;
`;
const UpImage = styled.img`
  filter: invert();
  width: 100%;
  display: block;
  padding: 18px;
`;
const Totel = styled.div`
  padding: 0 10px;
`;
const Incom = styled.small`
  font-weight: 300;
  color: gray;
`;
const Price = styled.p`
  font-size: 18px;
`;
const BackGroundImg = styled.div`
  width: 54%;
  padding: 17px 0;
`;
const ColorBlue = styled.div`
  background-color: #98bde5;
  width: 120px;
  padding: 10px 0px;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.8s;
    cursor: pointer;
  }
`;
const ColorGreen = styled.div`
  padding: 10px 0px;
  background-color: #98dbe5;
  width: 150px;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.8s;
    cursor: pointer;
  }
`;
const ColorRed = styled.div`
  background-color: #fec0a7;
  width: 100px;
  padding: 10px 0px;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.8s;
    cursor: pointer;
  }
`;
const PlusTo = styled.h3`
  width: 15%;
  padding: 15px;
`;
const PlusT = styled.h3`
  width: 15%;
  padding: 15px;
`;
const Plus = styled.h3`
  width: 15%;
  padding: 15px;
`;
// StatiStics end

// Right section starting
const RightSection = styled.section`
  width: 50%;
  padding: 10px;
`;
const TopSearch = styled.div`
  width: 60%;
  display: flex;
  padding-top: 10px;
`;
const SearchBar = styled.div``;
const SearchPut = styled.input`
  padding: 0 10px;
  ::placeholder {
  }
`;
const SearchLen = styled.div``;
const LensImg = styled.img`
  width: 100%;
  display: block;
`;
// Scearch section end

// Graph Section

const GraphSection = styled.section`
  margin-top: 22px;
  padding: 15px;
  box-shadow: rgb(161 161 161) 0px 0px 1px 0px;
  border-radius: 6px;
`;
const AnelyticDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 90%;
  margin: 0 auto;
`;
const Anelytic = styled.h2`
  width: 75%;
  font-weight: 600;
`;
const BlackDot = styled.div`
  width: 10px;
  height: 10px;
  background: #000;
`;
const InCom = styled.small`
  color: gray;
`;
const GreenDot = styled.div`
  width: 10px;
  height: 10px;
  background: green;
`;
const Savi = styled.small`
  color: gray;
`;
const SecDivImg = styled.div`
  cursor: pointer;
  padding: 5px 30px;
`;
const SecDivImage = styled.img`
  width: 100%;
  display: block;
`;
// Graph section is compeleted

// Transaction started
const TarnsactionSection = styled.section`
  padding: 15px;
  box-shadow: rgb(161 161 161) 0px 0px 1px 0px;
  border-radius: 6px;
  margin-top: 15px;
`;
const TopContainerTar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeadingTra = styled.h2`
  font-weight: 600;
  padding: 0px 0px 20px;
`;
const SeLect = styled.select`
  border: 1px solid #747474;
  padding: 2px 14px;
  border-radius: 23px;
  color: #747474;
  height: 33px;
`;
const TransItems = styled.ul``;
const TransList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;
const Up = styled.div`
  width: 55px;
  background: #000;
  border-radius: 5px;
`;
const Upimage = styled.img`
  width: 100%;
  display: block;
  filter: invert();
  padding: 18px;
`;
const NextD = styled.div`
  width: 40%;
`;
const Month = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;
const Times = styled.small`
  font-size: 12px;
  color: gray;
`;
const PlusW = styled.p`
  width: 15%;
  padding: 15px;
  color: #98ff98;
  font-weight: 500;
`;
const Plust = styled.p`
  width: 15%;
  padding: 15px;
  color: red;
  font-weight: 500;
`;
const Plusw = styled.p`
  width: 15%;
  padding: 15px;
  color: #98ff98;
  font-weight: 500;
`;
const DottedM = styled.div``;
const DottedIM = styled.img`
  width: 100%;
  display: block;
`;
