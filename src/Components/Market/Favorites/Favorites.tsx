import * as React from "react";
import { MarketCard } from "../../StyledComponents/Cards/MarketCard/MarketCard";
import styled from "styled-components";
import { useLocalStorage } from "../../../customHooks/useLocalStorage";
import { useProductData } from "../../../customHooks/useProductData";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Favorites: React.FC = () => {
  const key = "favorites";

  const { state } = useLocalStorage(key);

  const cardsData = state[key]
    .split(",")
    .filter((el) => el.length)
    .map((el) => useProductData(el));

  const cards = cardsData.map((el) => (
    <MarketCard
      key={el.productData[0].id}
      id={el.productData[0].id}
      title={el.productData[0].title}
      image={el.productData[0].image}
      price={el.productData[0].price}
      salePrice={el.productData[0].salePrice}
      inStock={el.productData[0].inStock}
    />
  ));

  return <GridContainer>{cards}</GridContainer>;
};
