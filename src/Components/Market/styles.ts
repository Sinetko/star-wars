import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: flex-start;
  width: 100%;
`;

const FavoritesLink = styled(Link)`
  background: var(--primary4);
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding: 5px 20px;
  margin-top: 7px;
`;

const Goods = styled.div`
  width: 100%;
  margin: 0 0 0 10px;
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  grid-auto-flow: row;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
`;

export const Styled = {
  Container,
  FavoritesLink,
  Goods,
};
