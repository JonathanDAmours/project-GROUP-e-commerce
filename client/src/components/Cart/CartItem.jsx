import React from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {removeItem, updateQuantity} from "../../actions";
import { VscClose } from "react-icons/vsc";

export const CartItem = ({item, title, quantity, _id, price}) => {
const dispatch = useDispatch();

return (
    <>
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <StyledVscClose onClick={()=> dispatch(removeItem({_id}))}/>
      </Header>
      <Price>{price}</Price>
      <Item>
        <Span>Quantity:</Span>
        <Input onChange={(event)=>{
            dispatch(updateQuantity({_id: _id, quantity: event.target.value}))
        }}
          value={quantity}
        />
      </Item>
    </Wrapper>
    </>
)
}

const Price = styled.p`
  padding-bottom: 5px;
  width: 200px;
  font-size: 10px;
  color: white;

  @media screen and (max-width: 600px) {
    text-align: left;
    width: 300px;
  }
`;


const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 3px solid white;
  color: white;
  width: 30px;
  height: 20px;
  padding-bottom: 3px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;

  @media screen and (max-width: 600px) {
  }
`;

const Wrapper = styled.div`
 padding: 10px 0 20px 0;
border-bottom: 1px solid white;

@media screen and (max-width: 600px) {
  }
`;

const StyledVscClose = styled(VscClose)`
  width: 15px;
  height: 15px;
  color:#d45e09;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
  }
`;

const Header = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 10px 0;
  width: 200px;
  font-size: 14px;

  @media screen and (max-width: 600px) {
    text-align: left;
    width: 300px;
  }
`;

const Span = styled.span`
  font-size: 14px;
  margin-right: 10px;

  @media screen and (max-width: 600px) {
  }
`;

const Item = styled.div`
  padding: 10px 10px;
  color: white;
  display: flex;
  background-color: #d45e09;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

