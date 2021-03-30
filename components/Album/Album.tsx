import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";

import Styles from "./styles";
import { AlbumP } from "../../types";
import { useNavigation } from "@react-navigation/native";

export type AlbumProps = {
    album: AlbumP,
}
 
const Album = (props: AlbumProps) => {

    const navigation = useNavigation();

    const onPress = ()=> {
        navigation.navigate('AlbumScreen', {id: props.album.id});
    }
    return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={Styles.container}>
        
            <Image source={{uri: props.album.imageUri}} style={Styles.image} />
            <Text style={Styles.text} >{props.album.artistHeadLine}</Text>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default Album;