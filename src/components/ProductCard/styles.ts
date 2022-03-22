import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
`;

export const Content = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.Image`
    width: ${RFValue(104)}px;
    height: ${RFValue(104)}px;
    border-radius: 52px;
    margin-right: 20px;
`;

export const Details = styled.View`
    flex: 1;
`;

export const Name = styled.Text`
    flex: 1;
    font-size: 20px;

    ${({ theme }) => css`
       font-family: ${theme.FONTS.TITLE};
       color: ${theme.COLORS.SECONDARY_900};
    `};
`;

export const Identificator = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Description = styled.Text`
    font-size: 12px;
    line-height: 20px;
    margin-right: 21px;

    ${({ theme }) => css`
       font-family: ${theme.FONTS.TEXT};
       color: ${theme.COLORS.SECONDARY_400};
    `};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    margin-top: 12px;
    margin: 12px 0px;
    margin-left: ${RFValue(124)}px;

    background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;