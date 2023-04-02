import { Input } from "antd";
import styled from 'styled-components';

const { TextArea } = Input;

const InputStyle = styled(Input)`
  border-color: #B3B3B3;
`;

const TextAreaStyle = styled(TextArea)`
  border-color: #B3B3B3;
`;

export { InputStyle, TextAreaStyle };