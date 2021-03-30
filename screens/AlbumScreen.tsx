import { useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SongListItem from '../components/SongListItem/SongListItem';
import AlbumHeader from "../components/AlbumHeader/AlbumHeader.";

const album = {
    id: '11',
    name: 'RED',
    by: 'Musify',
    likes: 432,
    imageUri: "https://i.pinimg.com/originals/be/65/ec/be65ecbf01b0f9d0cfbbd6631273fa8b.jpg",
    artistHeadLine: 'Taylor Swift',

    songs: [
        {
            id: '1',
            imageUri:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png/220px-Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png",
            title: "Bad Blood",
            artist: "Taylor Swift"
        },
        {
            id: '2',
            imageUri:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png/220px-Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png",
            title: "Bad Blood",
            artist: "Taylor Swift"
        },
        {
            id: '3',
            imageUri:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png/220px-Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png",
            title: "Bad Blood",
            artist: "Taylor Swift"
        },
        {
            id: '4',
            imageUri:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png/220px-Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png",
            title: "Bad Blood",
            artist: "Taylor Swift"
        },
        {
            id: '5',
            imageUri:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png/220px-Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png",
            title: "Bad Blood",
            artist: "Taylor Swift"
        },
        {
            id: '6',
            imageUri:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png/220px-Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png",
            title: "Bad Blood",
            artist: "Taylor Swift"
        },
        {
            id: '6',
            imageUri:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png/220px-Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png",
            title: "Bad Blood",
            artist: "Taylor Swift"
        },
    ]
}

const AlbumScreen = ()=> {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])

    return (
    <View style={styles.container}>
        <FlatList 
            data={album.songs}
            renderItem={({ item }) => <SongListItem song={item} />}
            keyExtractor={(item) => item.id}
            ListHeaderComponent = {()=> <AlbumHeader album={album}/>}
        />
    </View>
    )
}

export default AlbumScreen;


const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    }
})
