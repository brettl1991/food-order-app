import React from "react";
import CartIcon from "../Cart/CartIcon";
import styled from "styled-components";

const HeaderCartButton = (props) => {
  return (
    <ButtonStyle>
      <CartIconStyle>
        <CartIcon />
      </CartIconStyle>
      <span>Your Cart</span>
      <BadgeStyle>3</BadgeStyle>
    </ButtonStyle>
  );
};

export default HeaderCartButton;

const ButtonStyle = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2c0d00;
  }
`;

const CartIconStyle = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const BadgeStyle = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  &:hover button,
  &:active button {
    background-color: #92320c;
  }
`;

// .bump {
//   animation: bump 300ms ease-out;
// }

// @keyframes bump {
//   0% {
//     transform: scale(1);
//   }
//   10% {
//     transform: scale(0.9);
//   }
//   30% {
//     transform: scale(1.1);
//   }
//   50% {
//     transform: scale(1.15);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
