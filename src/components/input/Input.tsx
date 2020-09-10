import {
    Image,
    KeyboardTypeOptions,
    TextInput,
    TextStyle,
    TouchableOpacity,
    View,
    ViewProps,
    ViewStyle
} from 'react-native';
import React from 'react';
import styles from './Input.styles';
import {Send} from './assets';

interface InputFieldProps extends ViewProps {
    style?: ViewStyle;
    placeholder?: string;
    placeholderTextColor?: string;
    textStyle?: TextStyle;
    type?: 'none' | 'emailAddress' | 'password' | 'telephoneNumber' | 'date' | 'decimal';
    maxLength?: number;
    numberOfLines?: number;
    onChangeText?: (text: string) => void;
    value?: string;
    isMultiline?: boolean;
    isEditable?: boolean;
    send?: () => void;
}

const Input: React.FC<InputFieldProps> = ({
   style,
   placeholder,
   textStyle,
   type,
   maxLength,
   numberOfLines,
   onChangeText,
   value,
   isMultiline,
   isEditable,
   send,
   ...otherProps
}) => {
    // Keyboard configuration
    let keyboardType: KeyboardTypeOptions = 'default';
    let autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;

    switch (type) {
        case 'emailAddress':
            keyboardType = 'email-address';
            autoCapitalize = 'none';
            break;
        case 'telephoneNumber':
            keyboardType = 'phone-pad';
            break;
        case 'decimal':
            keyboardType = 'decimal-pad';
            break;
        default:
            keyboardType = 'default';
            break;
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="#90B3DD"
                style={{
                    ...styles.textInput,
                    ...textStyle,
                }}
                autoCapitalize={autoCapitalize}
                selectionColor="#0433BF"
                maxLength={maxLength}
                numberOfLines={numberOfLines}
                multiline={isMultiline}
                editable={isEditable}
                onChangeText={onChangeText}
                value={value}
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                textContentType={type !== 'decimal' ? type : undefined}
                keyboardType={keyboardType}
                placeholder={placeholder}
                {...otherProps}
            />
            <TouchableOpacity
                onPress={() => send ? send() : null}
                style={styles.sendImageContainer}
            >
                <Image source={Send} style={styles.sendImage} />
            </TouchableOpacity>
        </View>
    );
};

export default Input;
