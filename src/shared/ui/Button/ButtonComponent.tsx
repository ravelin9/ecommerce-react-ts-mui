import React from 'react';
import {Button, ButtonProps} from "@mui/material";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: #FFFFFF;
  border: none;
  border-radius: 45px;
  font-family: 'Ubuntu',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: right;

  color: #00A0AB;
&:hover{
  background-color: #F8F8F8;
}`
const ButtonComponent: React.FC<ButtonProps> = ({children}) => {
  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  );
};

export default ButtonComponent;