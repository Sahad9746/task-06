import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/logo.svg'

export default function Dashboard() {
  return (
    <DashboardSection>
      <HotSection>
                <CardSection>
                    {/* <DiplyBlok>
                        <LogoImgs>
                            <Nav />
                        </LogoImgs>
                        <Begerr>
                            <BergerImg src={logo} alt="Logo" />
                        </Begerr>
                    </DiplyBlok> */}
                    {/* <Buger></Buger> */}
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
            </HotSection>
    </DashboardSection>
  )
}
const DashboardSection = styled.div`
  width: 74%;
  background-color: #ffff
  ;
`
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
const Static = styled.div`

`;
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
