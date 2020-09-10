import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        alignItems: 'stretch',
        backgroundColor: '#EFF3FF',
        position: "relative",
    },
    container: {},
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
    inputStyles: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    messagesContainer: {
        flexGrow: 1,
        paddingHorizontal: 18,
    }
});

export default styles;
