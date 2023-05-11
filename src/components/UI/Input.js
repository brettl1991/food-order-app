import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props, ref) => {
  return (
    <SInput>
      <SLabel htmlFor={props.input.id}>{props.label}</SLabel>
      <SInputInput ref={ref} {...props.input} />
    </SInput>
  );
});

export default Input;

const SInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SLabel = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`;

const SInputInput = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
`;
