import React from "react";
import styled from "styled-components";

const Cart = (props) => {
  const cartItems = (
    <SCartItems>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </SCartItems>
  );
  return (
    <div>
      {cartItems}
      <STotal>
        <span>Total Amount</span>
        <span>35.62</span>
      </STotal>
      <SActions>
        <SButtonAlt>Close</SButtonAlt>
        <SOrderButton>Order</SOrderButton>
      </SActions>
    </div>
  );
};

export default Cart;

const SCartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
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

  button {
    background-color: #8a2b06;
    color: white;
  }
`;

const SOrderButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;

  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

const SButtonAlt = styled.button`
  color: #8a2b06;
`;
