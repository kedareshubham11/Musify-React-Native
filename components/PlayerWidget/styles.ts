import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        bottom: 41,
        backgroundColor: '#131313',
        marginBottom: 10,
        flexDirection: "row",
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
    },

    rightContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
     },
    image: {
        width: 80,
        height: 80,
    },

    title: {
        color: '#ffff',
        fontSize: 16
    },

    artist: {
       marginLeft: 10,
       color: 'grey',
       fontSize: 12
    },

    nameContainer: {
        flexDirection:'row',
    },

    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    iconHeart: {
        marginLeft: 60,
    },

    iconPlay: {
        marginLeft: 15,
    }
});

export default styles;