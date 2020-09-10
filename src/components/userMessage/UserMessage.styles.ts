import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
    root: {
        display: "flex",
        alignItems: "flex-end",
    },
    messageContainer: {
        maxWidth: width - (18 * 2 + 25),
        minWidth: 50,
        padding: 13,
        backgroundColor: '#5C74DD',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 3,
        marginTop: 24,
    },
    message: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        color: '#FFF',
    },
});

export default styles;
