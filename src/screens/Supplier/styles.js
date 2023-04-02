
import { Button, Form, Row, } from "antd";
import styled from 'styled-components';


const Title = styled.div`
  color: black;
`;

const FormItem = styled(Form.Item)`
  font-weight: 500;
`;

const LayoutImage = styled.div`
  margin-top: 4px;
`;

const ButtonSave = styled(Button)`
  float: right;
`;

const RowStyle = styled(Row)`
  margin-top: 10px;
`;

export { Title, FormItem, LayoutImage, ButtonSave, RowStyle };