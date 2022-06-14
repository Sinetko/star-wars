import * as React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { FiltersBar } from "./FiltersBar/FiltersBar";
import { MarketCard } from "../StyledComponents/Cards/MarketCard/MarketCard";
import { Styled } from "./styles";
import { StyledElement } from "../StyledComponents/Elements/Elements";
import { useMarketData } from "../../customHooks/useMarketData";

export const Market: React.FC = () => {
  const { state } = useMarketData();

  const [marketData, setMarketData] = React.useState(state);

  React.useEffect(() => {
    setMarketData(state);
  }, [state]);

  return (
    <Styled.Container>
      <div>
        <Styled.FavoritesLink to="/market/favorites">
          <span style={{ marginRight: "5px" }}>
            <FavoriteBorderIcon color="action" fontSize="medium" />
          </span>
          <StyledElement.H5>Favorites</StyledElement.H5>
        </Styled.FavoritesLink>
        <FiltersBar />
      </div>
      <Styled.Goods>
        {marketData.map((card) => (
          <MarketCard
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}
            price={card.price}
            salePrice={card.salePrice}
            inStock={card.inStock}
          />
        ))}
      </Styled.Goods>
    </Styled.Container>
  );
};
