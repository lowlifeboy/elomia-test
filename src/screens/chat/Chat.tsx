import {FlatList, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './Chat.styles';
import {BotMessage, Header, Input, UserMessage} from "components";

const defaultMessages: {ip: string, customer: 'bot' | 'user', text: string, time: number, date: number}[] = [
    {
        ip: '0.0.0.0',
        customer: "bot",
        text: "Test bot message",
        time: 123,
        date: 1,
    },
    {
        ip: '0.0.0.0',
        customer: "bot",
        text: "Second test bot message",
        time: 123,
        date: 2,
    },
    {
        ip: '127.0.0.1',
        customer: "user",
        text: "Test user message",
        time: 123,
        date: 3,
    },
];

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<{ip: string, customer: 'bot' | 'user', text: string, time: number, date: number}[]>(defaultMessages);
    const [message, setMessage] = useState<string>();
    const [ip, setIP] = useState<string>();

    let time: number;

    const sendMessage = async () => {
        time = +(new Date());
        if (message) {
            await fetch('https://api.ipify.org?format=json', {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(r => setIP(r.ip))
                .catch(e => console.log(e))
        }
        time = +(new Date()) - time;

        if (ip && message) {
            setMessages([...messages, {ip, customer: 'user', text: message, time, date: +(new Date())}]);
            setMessage('');
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <Header />
            <FlatList
                contentContainerStyle={styles.messagesContainer}
                data={messages}
                numColumns={1}
                keyExtractor={(item) => item.ip + '_' + item.date}
                renderItem={({item}) => item.customer === 'bot'
                    ? <BotMessage item={item} />
                    : <UserMessage item={item} />
                }
            />
            <Input placeholder="Write a message" value={message} onChangeText={setMessage} send={sendMessage}/>
        </SafeAreaView>
    );
};

export default Chat;
