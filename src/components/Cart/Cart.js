import React, { useContext } from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <SCartItems isMoreItemAvailable={cartCtx.items.length}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </SCartItems>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <STotal>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </STotal>
      <SActions>
        <SButtonAlt onClick={props.onClose}>Close</SButtonAlt>
        {hasItems && <SOrderButton>Order</SOrderButton>}
      </SActions>
    </Modal>
  );
};

export default Cart;

const SCartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: ${({ isMoreItemAvailable }) =>
    `${isMoreItemAvailable > 1 ? "scroll" : ""}`};
`;

const STotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const SActions = styled.div`
  text-align: right;
`;

const SOrderButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  background-color: #8a2b06;
  color: white;

  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

const SButtonAlt = styled.button`
  color: #8a2b06;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  background-color: white;

  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;
