import React from "react";

import mealsImage from "../../assets/meals.jpg";

import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <h1>Meals4You</h1>
        <button>Cart</button>
      </HeaderStyle>
      <ImageContainerStyle>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </ImageContainerStyle>
    </>
  );
};

export default Header;

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #8e4b24;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const ImageContainerStyle = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;

  img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`;
