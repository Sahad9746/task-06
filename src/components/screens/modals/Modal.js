import { useState} from 'react'

import styled from 'styled-components'
import suryan from "../../Assets/sun.svg";
import fire from "../../Assets/fire.svg";
import game from "../../Assets/gaming.svg";
import { Button } from 'antd';

function Modal({close}) {
    
  return (
    <ModaL>
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
                    <SunImg src={fire} alt="fire" />
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
            <ButtonClose onClick={() => close(false)}>Close Here!!!</ButtonClose>
            </FifthDivision>
    </ModaL>
  )
}
const ModaL = styled.section`
position: fixed;
top:0 ;
left: 0;
background-color: rgba(0,0,0, 0.4);
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
const ButtonClose  = styled.button`
    cursor:pointer;
    margin-top: 40px;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    margin: 0 auto;
`;
const FifthDivision = styled.div`
background: #fff;
min-width: 600px;
border-radius: 0.5rem;
box-shadow: 0 1px 10px #999;
padding: 15px;
`;

const BoxList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const BoxListItem = styled.li`
  background: #fec0a7;
  padding: 15px;
  margin: 0 12px 12px 0;
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
  &:nth-child(3){
    margin-right: 0;
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

export default Modal