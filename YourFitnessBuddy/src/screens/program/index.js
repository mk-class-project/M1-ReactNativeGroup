import React from "react";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";
import Calendar from "../../components/calendar";

import { Container, Overlay, Content, Title, BackgroundImage } from "../../global/styles/global.styles";

const ProgramScreen = ({ navigation }) => {
    const theme = useTheme();
    
    return (
        <Container>
        <BackgroundImage source={theme.image} resizeMode="cover">
            <Overlay />
            <Content>
            <Title>Program</Title>
            <Calendar />
            </Content>
        </BackgroundImage>
        <AppNavigator navigation={navigation} />
        </Container>
    );
    }

export default ProgramScreen;