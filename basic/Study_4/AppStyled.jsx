import React from 'react'
import styled, { css } from "styled-components";

const ButtonName = styled.button`
    background-color: azure;
    margin: 20px;
    padding: 20px;
    font-size: 20px;
    `;

const PropertyButton = styled.button`
    background-color: beige;
    margin: 20px;
    padding: 20px;
    font-size: 20px;
    ${(test) =>
        test.Testproperty &&
        css`
        background-color: crimson;
    `};
`;

const DivBox = styled.div`
    display: flex;
    border: 2px solid black;
    margin: 20px;
    padding: 20px;
    `

export default function AppStyled() {
    return (
        <DivBox>
            <ButtonName>Don't have Property </ButtonName>
            <PropertyButton> Not Use Property </PropertyButton>
            <PropertyButton Testproperty> Use Property </PropertyButton>
        </DivBox>
    )
}
