import styled from 'styled-components/native'; 
import { COLORS, FONTS } from '../../theme';
 
export const Container = styled.View`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border-width: 1px;
    border-color: ${COLORS.BLACK};
    background:${COLORS.WHITE};
    justify-content: center;
    padding: 0 10px 0 10px;
    margin-bottom: 20px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-size: 14px; 
    font-family: ${FONTS.POPPINS_REGULAR};
    color: ${COLORS.BLACK};
`;