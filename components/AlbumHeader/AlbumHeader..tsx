import React from 'react';
import styles from "./styles";
import { Image, Text, View, TouchableOpacity} from 'react-native';
import {AlbumP} from "../../types";

export type AlbumHeaderProps = {
    album: AlbumP;
}

const AlbumHeader= (props: AlbumHeaderProps) => {
    return (
            <View style={styles.container}>
                <Image source={{uri: props.album.imageUri}} style={styles.image}/>
                <Text style={styles.title}>{props.album.name}</Text>
                
                <View style={styles.creatorContainer}>
                    <Text style={styles.creator}>By: {props.album.by}</Text>
                    <Text style={styles.likes}>{props.album.likes} Likes</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <View>
                        <Text style={styles.buttonText}>PLAY</Text>
                    </View>
                </TouchableOpacity>
            </View>
    )
}

export default AlbumHeader;
