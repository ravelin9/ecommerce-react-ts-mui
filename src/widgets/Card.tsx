import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import styled from "styled-components";

export type CardProps = {
  seen: boolean,
  price: number,
  title: string,
  address: string,
  createdAt: string
}
const StyledCard = styled(Card)`
  margin: 20px;
  width: 200px;`
const ProductCard: React.FC<CardProps> = ({
                                     seen,
                                     price,
                                     title,
                                     address,
                                     createdAt
                                   }
) => {
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component={'img'}
          image={'https://picsum.photos/640/640'}
          alt={'image'}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ProductCard;