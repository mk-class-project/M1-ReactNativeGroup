import React from "react";
import { Text } from "react-native";

import { ContainerQuote } from "./styles";

export default Quote = ({ quote }) => {
    return (
        <ContainerQuote>
            <Text>{quote}</Text> 
        </ContainerQuote>
    );
};