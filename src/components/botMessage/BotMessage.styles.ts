import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
    root: {
        display: "flex",
        alignItems: "flex-start",
    },
    messageContainer: {
        maxWidth: width - (18 * 2 + 25),
        minWidth: 50,
        padding: 13,
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 24,
    },
    message: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        color: '#07144A',
    },
});

export default styles;
