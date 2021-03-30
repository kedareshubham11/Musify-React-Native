import React from 'react';
import styles from "./styles";
import { Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const song= {
        id: '1',
        imageUri:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png/220px-Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_%28Official_Single_Cover%29.png",
        title: "Bad Blood",
        artist: "Taylor Swift"
}


const PlayerWidget = () => {
  
    return (
        <View style={styles.container}>

            <Image source={{ uri: song.imageUri}} style={styles.image} />
            
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>- {song.artist}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign name="hearto" size={27} color="white" style={styles.iconHeart}/>
                    <Entypo name="controller-play" size={40} color="white" style={styles.iconPlay} />
                </View>
            </View>
        </View>
    )
  

}

export default PlayerWidget;