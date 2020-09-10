import {Text, View} from 'react-native';
import React from 'react';
import styles from './BotMessage.styles';

interface BotMessageProps {
    item: {ip: string, customer: 'bot' | 'user', text: string, time: number, date: number};
}

const BotMessage: React.FC<BotMessageProps> = ({item}) => {
    return (
        <View style={styles.root}>
            <View style={styles.messageContainer}>
                <Text style={styles.message}>IP: {item.ip}</Text>
                <Text style={styles.message}>time: {item.time} ms</Text>
                <Text style={styles.message}>text: {item.text}</Text>
            </View>
        </View>
    );
};

export default BotMessage;
