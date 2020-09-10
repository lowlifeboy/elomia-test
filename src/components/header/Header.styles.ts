import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        width,
        height: 66,
        backgroundColor: '#A4B3EA',
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 16,
    },
    avatar: {
        width: 46,
        height: 46,
        marginRight: 13,
    },
    botName: {
        fontWeight: "bold",
        fontSize: 22,
        color: '#FFF',
    },
});

export default styles;
