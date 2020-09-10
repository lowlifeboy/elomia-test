import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './Header.styles';
import {ElomiaAvatar} from './assets';

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <Image source={ElomiaAvatar} style={styles.avatar} />
            <Text style={styles.botName}>Elomia</Text>
        </View>
    );
};

export default Header;
