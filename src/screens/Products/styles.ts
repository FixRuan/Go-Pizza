import styled, { css } from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.KeyboardAvoidingView`
   flex: 1;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(
    (({ theme }) => ({
        colors: theme.COLORS.GRADIENT,
    }))
)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${getStatusBarHeight() + 33}px 20px 24px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.TITLE};
    `}
`;

export const DeleteLabel = styled.Text`
    font-size: ${RFValue(14)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.TITLE};
    `}
`;