import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: ${(props) =>
    props.btntype === "primary" ? "4px" : "10px"};
  color: white;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: #007bff;
`;

export const SuccessButton = styled(Button)`
  background-color: #28a745;
`;
