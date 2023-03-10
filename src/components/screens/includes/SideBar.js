import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Assets/logo.svg";
import dashboard from "../../Assets/dashboard.svg";
import lock from "../../Assets/lock.svg";
import card from "../../Assets/card.svg";
import gear from "../../Assets/gear.svg";
import transaction from "../../Assets/transaction.svg";
import dot from "../../Assets/dot.svg";

function SideBar() {
  const [navOpen, setNavOpen] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1280) {
        setNavOpen(false);
      } else {
        setNavOpen(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const style = {
    transform: navOpen ? "translateX(0)" : "translateX(-180%)",
  };
  return (
    <>
      <Wrapper>
        <Menu onClick={() => setNavOpen(!navOpen)}>
          <HamburgerButton
            navOpen={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            <span />
            <span />
            <span />
          </HamburgerButton>
        </Menu>
        <MainContainer style={style}>
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
              <Li>
                <LeftImage>
                  <Imageleft src={dashboard} />
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
                  <Imageleft src={card} />
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
                  <Imageleft src={lock} />
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
                  <Imageleft src={transaction} />
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
                  <Imageleft src={gear} />
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
              <Image src={require("../../Assets/man.jpg")} />
            </LeftDiv>
            <H3>Jennifer Connelly</H3>
            <DivRight>
              <Img src={dot} />
            </DivRight>
          </DivBottom>
        </MainContainer>
      </Wrapper>
    </>
  );
}

export default SideBar;
const Wrapper = styled.nav`
  min-width: 60px;
  height: 100vh;
  background: #f6f6f6;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 5%;
  }
`;
const MainContainer = styled.section`
  width: 280px;
  height: 100vh;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  transform: translateX(0);
`;
// ----------------------
const Menu = styled.div`
  padding: 15px;
  cursor: pointer;
  z-index: 100;
  position: absolute;
`;
const HamburgerButton = styled.div`
  display: none;

  @media screen and (max-width: 1280px) {
    display: block;
    width: 30px;
    height: 22.5px;
    padding: 0;
    position: relative;
    cursor: pointer;

    span {
      position: absolute;
      height: 3px;
      border-radius: 5px;
      width: 100%;
      background-color: #000;
      transition: transform 0.3s ease-out;
      transform-origin: center;

      &:nth-child(1) {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.1s ease-out;
        left: 0;
        opacity: 1;
      }

      &:nth-child(3) {
        left: 0;
        bottom: 0;
      }
    }

    ${({ navOpen }) =>
      navOpen &&
      `
      span:nth-child(1) {
        transform: translateY(10px) rotate(-45deg);
      }
      span:nth-child(2) {
        transform: translate(100%);
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-9px) rotate(45deg);
      }
    `}
  }
`;
// -------------------------
const DivTop = styled.div`
  flex: 1;
`;
const DivLogo = styled.div`
  max-width: 60px;
`;
const DivCenter = styled.div`
  flex: 8;
  margin-top: 40px;
`;
const A = styled.a`
  display: block;
`;
const H1 = styled.h1`
  display: flex;
  align-items: center;
`;
const Ul = styled.ul``;
const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  :last-child {
    margin-bottom: 0;
  }
`;
const Item = styled(NavLink)`
  font-size: 18px;
  color: gray;
`;
const LeftImage = styled.div`
  margin-right: 18px;
`;
const Imageleft = styled.img`
  width: 100%;
  display: block;
  filter: invert(56%) sepia(0%) saturate(57%) hue-rotate(135deg) brightness(89%)
    contrast(86%);
`;
const H2 = styled.h2`
  font-size: 25px;
  color: gray;
  font-weight: 500;
`;

const DivBottom = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid rgb(0, 0, 0);
`;
const LeftDiv = styled.div`
  max-width: 50px;
  margin-right: 10px;
`;
const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
`;
const DivRight = styled.div``;
const H3 = styled.h4`
  margin-right: 10px;
`;

const ItemImage = styled(NavLink)``;
const Img = styled.img`
  width: 100%;
  display: block;
  margin-right: 12px;
`;
