import * as React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import { Styled } from "./styles";
import { getDiscountValue } from "../../../../helpers/getDiscountValue/getDiscountValue";
import { useLocalStorage } from "../../../../customHooks/useLocalStorage";

interface MarketCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  salePrice: number;
  inStock: boolean;
}

export const MarketCard: React.FC<MarketCardProps> = ({
  id,
  title,
  image,
  price,
  salePrice,
  inStock,
}) => {
  const favorites = "favorites";

  const { state, setData, removeData } = useLocalStorage(favorites);

  const isFavorites = state[favorites]?.includes(id.toString());

  const toggleFavorites = () => {
    if (!isFavorites) {
      setData(favorites, id);
    } else {
      removeData(favorites, id);
    }
  };

  const discount = getDiscountValue(salePrice, price);
  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.Favorites>
          <IconButton onClick={toggleFavorites}>
            {isFavorites ? (
              <FavoriteIcon color="error" fontSize="medium" />
            ) : (
              <FavoriteBorderIcon fontSize="medium" />
            )}
          </IconButton>
        </Styled.Favorites>
        <Styled.ImageContainer>
          {!!discount && <Styled.Discount>{discount}%</Styled.Discount>}

          <Styled.Image src={image} inStock={inStock} />
        </Styled.ImageContainer>
        <Styled.Title>
          <Styled.RouterLink to={`${id}`} inStock={inStock}>
            {title}
          </Styled.RouterLink>
        </Styled.Title>
        {!!discount && <Styled.OldPrice>{price}$</Styled.OldPrice>}
        <Styled.Price discount={!!discount}>{salePrice}$</Styled.Price>
        {inStock ? (
          <Styled.Stock inStock={inStock}>Есть в наличии</Styled.Stock>
        ) : (
          <Styled.Stock inStock={inStock}>Нет в наличии</Styled.Stock>
        )}
      </Styled.Card>
    </Styled.Container>
  );
};
