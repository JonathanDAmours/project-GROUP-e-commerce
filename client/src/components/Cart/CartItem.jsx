import React from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {removeItem, updateQuantity} from "../../actions";


export const CartItem = ({title, quantity, _id}) => {
const dispatch = useDispatch();

return (
    <>
    <div>{title} / {quantity} / {_id}</div>
    </>
)
}