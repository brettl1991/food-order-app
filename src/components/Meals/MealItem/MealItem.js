import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <SMealItem>
      <div>
        <SMealName>{props.name}</SMealName>
        <SMealDescription>{props.description}</SMealDescription>
        <SMealPrice>{price}</SMealPrice>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </SMealItem>
  );
};

export default MealItem;

const SMealItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

const SMealName = styled.h3`
  margin: 0 0 0.25rem 0;
`;

const SMealDescription = styled.div`
  font-style: italic;
`;

const SMealPrice = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;
