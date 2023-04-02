
import { Card, Input, Button } from "antd";
import styled from 'styled-components';
const CardStyle = styled(Card)`
  max-width: 70%;
  display: block;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.2);
`
const InputUserName = styled(Input)`
  padding: 10px 20px;
  font-size: 1.1em;
  border-color: #79B2D2;
`

const InputPassWord = styled(Input.Password)`
  padding: 10px 20px;
  font-size: 1.1em;
  border-color: #79B2D2;
`

const ButtonLogin = styled(Button)`
  width: 100%;
  height: 50px;
  border: none;
  font-weight: bold;
  font-size: 1.2em;
`

const Line = styled.hr`
  color: rgba(0, 0, 0, 0.65);
`;

export { CardStyle, InputUserName, InputPassWord, ButtonLogin, Line };