import styled from "@emotion/styled";
import { ChangeEvent, useState, FC } from "react";
import darumachanPng from '../assets/darumachan.png'
import human from '../assets/dummy-human.webp'
import logo from '../assets/logo.png'
import chat from '../assets/chat.png'
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const Tab = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px;
  `
  const TabButtonSelected = styled.button`
    width: 120px;
    height: 40px;
    color: white;
    border-radius: 100000000px;
    background-color: #A4797D;
  `

  const TabButton = styled.button`
    width: 120px;
    height: 40px;
    color: black;
  `

  const Img = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  `;

  const UserInfo = styled.div`
    display: flex;
    padding: 8px;
  `;

  const UserIconImg = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 100%;
  `

  const UserName = styled.a`
    line-height: 40px;
    padding-left: 8px;
    color: blue;
  `

  const Counts = styled.div`
    display: flex;
    padding-left: 16px;
  `

  const Text = styled.div`
    padding-left: 4px;
  `

  const GoUploadButton = styled.button`
    display: flex;
    background-color: #A4797D;
    border-radius: 100000000px;
    margin: 32px;
  `

  const ButtonLabelText = styled.div`
    color: white;
    line-height: 40px;
    padding: 0 8px;
  `

  const IconImage = styled.img`
    height: 24px;
    width: 24px;
    margin-left: 16px;
  `
  const Comment = styled.div`
    padding: 8px;
  `

  const End = styled.div`
    justify-content: center;
  `

  const navigate = useNavigate()

  return (
    <>
      <Tab>
        <TabButtonSelected>おすすめ</TabButtonSelected>
        <TabButton>ランキング</TabButton>
      </Tab>
      <Img src={darumachanPng} alt="user upload image"></Img>
      <UserInfo>
        <UserIconImg src={human}></UserIconImg>
        <UserName>@baeeeeee</UserName>
      </UserInfo>
      <Counts>
        <Text>♡</Text>
        <Text>100</Text>
        <IconImage src={chat}></IconImage>
        <Text>100</Text>
      </Counts>
      <Comment>いい写真撮れた！！！！！ドヤ！！</Comment>
      <End>
        <GoUploadButton onClick={() => { navigate('/upload') }}>
          <UserIconImg src={logo} alt="user upload image"></UserIconImg>
          <ButtonLabelText>投稿</ButtonLabelText>
        </GoUploadButton>
      </End>
    </>
  );
};
