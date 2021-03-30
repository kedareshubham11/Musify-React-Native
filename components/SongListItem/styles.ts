import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    container: {
       margin: 10,
       flexDirection: "row",
    },

    rightContainer: {
        
        justifyContent: 'space-around',
        marginLeft: 10,
     },
    image: {
        width: 100,
        height: 80,
    },

    title: {
        color: '#ffff',
        fontSize: 22
    },

    artist: {
       color: 'grey',
       fontSize: 14
    }
});

export default styles;