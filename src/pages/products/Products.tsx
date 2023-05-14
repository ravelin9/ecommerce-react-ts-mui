import React from 'react';
import ProductCard from "../../widgets/Card";
import {useProducts} from "../../app/productsContext";
import styled from "styled-components";
import ButtonComponent from "../../shared/ui/Button/ButtonComponent";

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center`
const ProductsList = styled.div`

  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 0 auto 31px;
  @media (max-width: 980px) {
    padding: 0 15px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const Products = () => {

  const {products} = useProducts()
  return (
    <><ProductsList>
      {products.map(item => (
        <ProductCard key={item.id} seen={item.seen} price={item.price} title={item.title} address={item.address}
                     createdAt={item.createdAt}/>
      ))}
    </ProductsList>
      <Wrapper><ButtonComponent>Показать еще</ButtonComponent></Wrapper>
    </>
   )
};

export default Products;