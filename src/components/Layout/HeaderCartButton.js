import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styled from "styled-components";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <ButtonStyle bump={btnIsHighlighted} onClick={props.onClick}>
      <CartIconStyle>
        <CartIcon />
      </CartIconStyle>
      <span>Your Cart</span>
      <BadgeStyle>{numberOfCartItems}</BadgeStyle>
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

  animation: ${({ bump }) => `${bump ? "bump 300ms ease-out" : ""}`};

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
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
