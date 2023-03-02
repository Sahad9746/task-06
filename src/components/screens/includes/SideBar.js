import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../../Assets/logo.svg"
import dashboard from "../../Assets/dashboard.svg"
import lock from "../../Assets/lock.svg"
import card from "../../Assets/card.svg"
import gear from "../../Assets/gear.svg"
import transaction from "../../Assets/transaction.svg"
import dot from "../../Assets/dot.svg"

function SideBar() {
  return (
    <>
     {/* <Maincontainer>
      <Header>

      </Header>
      <NavContent>
        <NavItems>
            <Item
              // className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Dashboard
            </Item>
            <ItemImage to="/">
              <Img  />
            </ItemImage>
        </NavItems>
        <NavItems>
            <Item
              // className={({ isActive }) => (isActive ? "active" : "")}
              to="/mycards"
            >
              Mycards
            </Item>
            <ItemImage to="/">
              <Img />
            </ItemImage>
        </NavItems>
        <NavItems>
            <Item
              // className={({ isActive }) => (isActive ? "active" : "")}
              to="/transaction"
            >
              Transaction
            </Item>
            <ItemImage to="/">
              <Img  />
            </ItemImage>
        </NavItems>
        <NavItems>
            <Item
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/saving"
            >
              Saving
            </Item>
            <ItemImage to="/">
              <Img  />
            </ItemImage>
        </NavItems>
        <NavItems>
            <Item
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/settings"
            >
              Settings
            </Item>
            <ItemImage to="/">
              <Img/>
            </ItemImage>
        </NavItems>

      </NavContent>

     </Maincontainer> */}
     <MainContainer>
      <DivTop>
        <DivLogo>
          <A>
            <H1>
              <Img src={logo} />
              Wallet
            </H1>
          </A>
          
        </DivLogo>
     </DivTop>
     <DivCenter>
      <Ul>
        <Li >
          <LeftImage>
            <Imageleft src={dashboard}/>
          </LeftImage>
          <Item
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Dashboard
            </Item>
        </Li>
        <Li>
          <LeftImage>
            <Imageleft src={card}/>
          </LeftImage>
          <Item
              // className={({ isActive }) => (isActive ? "active" : "")}
              to="/mycards"
            >
              Mycards
            </Item>
        </Li>
        <Li>
          <LeftImage>
            <Imageleft src={lock}/>
          </LeftImage>
          <Item
              // className={({ isActive }) => (isActive ? "active" : "")}
              to="/saving"
            >
              Saving
            </Item>
        </Li>
        <Li>
          <LeftImage>
            <Imageleft src={transaction}/>
          </LeftImage>
          <Item
              // className={({ isActive }) => (isActive ? "active" : "")}
              to="/settings"
            >
              Settings
            </Item>
        </Li>
        <Li>
          <LeftImage>
            <Imageleft src={gear}/>
          </LeftImage>
          <Item
              // className={({ isActive }) => (isActive ? "active" : "")}
              to="/transaction"
            >
              Transaction
            </Item>
        </Li>
      </Ul>
     </DivCenter>
     <DivBottom>
      <LeftDiv>
        <Image src={require("../../Assets/man.jpg")}/>
      </LeftDiv>
      <H3>Jennifer Connelly</H3>
      <DivRight>
        <Img src={dot}/>
      </DivRight>
     </DivBottom>
     </MainContainer>
    </>
  )
}

export default SideBar;
const MainContainer = styled.section`
  width: 25%;
  padding: 24px;
  background: #f6f6f6;
`;
const DivTop =styled.div`
  padding: 0 0 50px 0;
`
const DivLogo =styled.div`
  max-width: 70px;
`
const DivCenter =styled.div`
  border-bottom: 1px solid #000;
  padding: 0 0 40px 0;
`
const A =styled.a`
  display: block;
`
const H1 =styled.h1`
  display: flex;
  align-items: center;
`
const Ul =styled.ul``;
const Li =styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`
const Item = styled(NavLink)`
  /* font-size: 18px;
  color: gray;
  font-weight: 500; */
`
const LeftImage = styled.div`
  margin-right: 18px;
`;
const Imageleft = styled.img`
  width: 100%;
  display: block;
  filter: invert(56%) sepia(0%) saturate(57%) hue-rotate(135deg) brightness(89%) contrast(86%);
`;
const H2 = styled.h2`
  font-size: 18px;
  color: gray;
  font-weight: 500;
`;

const DivBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto;
`;
const LeftDiv = styled.div`
  max-width: 50px;
`;
const Image =styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
`
const DivRight = styled.div``;
const H3 = styled.h4`
  width: 20%;
`;

const ItemImage = styled(NavLink)
`

`
const Img =styled.img`
  width: 100%;
  display: block;
  margin-right: 12px;
`