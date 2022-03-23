import React from 'react';
import { Platform } from 'react-native';


import { BackButton } from '../../components/BackButton';

import {
    Container,
    Header,
    Photo,
} from './styles';

export function Order() {
    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Header>
                <BackButton
                    onPress={() => { }}
                    style={{ marginBottom: 108 }}
                />
            </Header>

            <Photo source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/gopizza-6c572.appspot.com/o/pizzas%2F1648043701771.png?alt=media&token=08f236be-52f9-419c-a5fa-84ee4e993914' }} />
        </Container>
    );
}