import styled from "@emotion/styled";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import darumachanPng from "../assets/logo.png";

export const Upload: FC = () => {
  const navigate = useNavigate();

  const CenterWrapper = styled.div`
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  const Img = styled.img`
    width: 80%;
    aspect-ratio: 1/1;
    object-fit: cover;
  `;
  const Button = styled.button`
    width: 80%;
    height: 40px;
    color: white;
    margin-top: 32px;
    border-radius: 100000000px;
    background-color: #a4797d;
  `;

  return <CenterWrapper>
    <Img src={darumachanPng} alt="user upload image"></Img>
    <Button onClick={() => { navigate('/gacha') }}>送信する</Button>
  </CenterWrapper>
};
