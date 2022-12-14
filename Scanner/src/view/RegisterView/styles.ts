import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.SafeAreaView`
    flex: 1; 
    background: ${COLORS.WHITE};
`;

export const Content = styled.View`
    flex: 1;
    padding: 20px;
    margin-top: 55px;
`;

export const ContainerLogo = styled.View`
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const ContainerButton = styled.View`
    margin-bottom: 30px;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 100px;
`;

export const TextForgotPassword = styled.Text`
    text-align: right;
    font-family: ${FONTS.POPPINS_REGULAR};
    font-size: 12px;
    color: ${COLORS.BLUE};
    margin-bottom: 30px;
`;

export const TextInfo = styled.Text`
    text-align: center;
    font-family: ${FONTS.POPPINS_REGULAR};
    font-size: 15px;
    color: ${COLORS.BLUE};
    margin-bottom: 20px;
`;

export const TextSlogan = styled.Text`
    text-align: center;
    font-family: ${FONTS.POPPINS_REGULAR};
    font-size: 15px;
    color: ${COLORS.BLACK};
    margin-bottom: 30px;
`;