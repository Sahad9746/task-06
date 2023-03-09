import { useState} from 'react'

import styled from 'styled-components'
import suryan from "../../Assets/sun.svg";
import fire from "../../Assets/fire.svg";
import game from "../../Assets/gaming.svg";
import { Button } from 'antd';

function Modal({close}) {
    
  return (
    <Modal>
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
            </FifthDivision>
            <ButtonClose onClick={() => close(false)}>Close Here!!!</ButtonClose>
    </Modal>
  )
}
const Modal = styled.section`
position: fixed;
top:0 ;
left: 0;


`;
const ButtonClose  = styled.button`
    cursor:pointer;
    margin-top: 40px;
    border: 2px solid #000;
    padding: 12px;
`;
const FifthDivision = styled.div``;
const BoxList = styled.ul`
  display: flex;
  flex-wrap: wrap;
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