import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { COLORS } from '../../theme';
import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
    name: string;
    secure?: boolean;
}

export default function InputComponent({ name, secure = false, ...rest }: InputProps) {
    const [isSecure, setIsSecure] = useState<boolean>(secure);
    return (
        <Container >
            <TextInput
                keyboardAppearance="default"
                secureTextEntry={isSecure}
                placeholderTextColor={COLORS.PLACEHOLDER}
                {...rest}
            />
        </Container>)
}

