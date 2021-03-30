import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center'
        
    },

    creatorContainer: {
        flexDirection: 'row',
        margin: 5,
    },

    title: {
        color: '#ffff',
        fontSize: 24,
    },

    image: {
        height: 180,
        width: 180,
        margin: 15,
    },

    creator: {
        color: 'gray',
        marginRight: 10,
        margin: 5,
    },

    likes: {
        color: 'gray',
        marginLeft: 10,
        margin: 5,
    },

    button: {
        backgroundColor: '#31aa5c',
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },

    buttonText: {
        color: 'lightgrey',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default styles;