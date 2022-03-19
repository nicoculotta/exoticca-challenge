import React from "react";
import styled from "styled-components";
import { CardType } from "../types/types";

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 275px 105px;
  grid-template-columns: 1fr;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
  margin: 20px;
 @media (max-width: 600px) {
    margin: 10px;
  }
  @media (max-width: 480px) {
    margin: 6px;
  }
`;

const CardImage = styled.div`
  position: relative;
  color: #fff;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & h3 {
    font-size: 24px;
    position: absolute;
    font-weight: 700;
    bottom: 40px;
    z-index: 1;
    margin: 0;
    padding: 16px 16px 0;
  }
  & span {
    font-weight: 500;
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    padding: 0 16px
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 8px 16px;
  background-color: #fff;
`;

const Price = styled.div`
  font-size: 14px;
  & span:first-child {
    text-decoration: line-through;
    font-size: 16px;
    font-weight: 700;
  }
  & span:nth-child(2) {
    text-decoration: line-through;
    font-size: 24px;
    font-weight: 700;
  }
  @media (max-width: 600px) {
      & span:nth-child(2) {
      text-decoration: line-through;
      font-size: 18px;
      font-weight: 700;
    }
  }
`;

const Card = ({ images, title, destination, days, priceDetail }: CardType) => {
  return (
    <CardContainer>
      <CardImage>
        <img src={images[0].desktop} alt={destination} />
        <h3>{destination}</h3>
        <span>{days} Days</span>
      </CardImage>
      <CardContent>
        <p>{title}</p>
        <Price>
            From <span>{priceDetail.oldPriceBeautify}</span> <span>{priceDetail.fromPriceBeautify}</span>
        </Price>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
