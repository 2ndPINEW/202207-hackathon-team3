import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ChangeEvent, useState, FC } from "react";
import darumachanPng from '../assets/darumachan.png'

export const Upload: FC = () => {
  const CenterWrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
  `
  const Img = styled.img`
    width: 80%;
    aspect-ratio: 1/1;
    object-fit: cover;
  `;
  const Button = styled.button`
    width: 80%;
  `

  return <CenterWrapper>
    <Img src={darumachanPng} alt="user upload image"></Img>
    <Button>送信する</Button>
  </CenterWrapper>
};
