
import { Row, Col, Popover } from "antd";
import styled from 'styled-components';

const PopoverEdit = styled(Popover)`
  background-color: rgb(55, 181, 157);
  border-radius: 5px;
  color: #FFFFFF;
  padding: 5px;
  border: 1px solid rgb(55, 181, 157);
`;

const PopoverDelete = styled(Popover)`
  background-color: rgb(240, 65, 52);
  border-radius: 5px;
  color: #FFFFFF;
  padding: 5px;
  border: 1px solid rgb(240, 65, 52);
`;

export { PopoverEdit, PopoverDelete };