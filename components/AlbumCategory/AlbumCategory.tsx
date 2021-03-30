import React from "react";
import { View, Text, FlatList } from "react-native";
import { AlbumP } from "../../types";
import styles from "./styles";
import Album from "../Album/Album";

export type AlbumCategoryProps = {
    title: string,
    album: [AlbumP],

}

const AlbumCategory = (props: AlbumCategoryProps) => (
    <View style={styles.container}>
        <Text style={styles.title} >{props.title}</Text>

        <FlatList
        data={props.album}
        renderItem= {({item}) => <Album album={item} />}
        keyExtractor={(item)=> item.id }
        horizontal
        />
    </View>
)

export default AlbumCategory;