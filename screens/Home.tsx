import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// import Album from "../components/Album/Album";
import AlbumCategory from "../components/AlbumCategory/AlbumCategory";

// const album = {
//   id: '1',
//   imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
//   artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
// }

const albumCategory = [
  {
    id: '1',
    title: "Recently Played",
    album: [
      {
      id: '1',
      imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
      artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
      id: '2',
      imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
      artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
        id: '3',
        imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
        artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
        id: '4',
        imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
        artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
        id: '5',
        imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
        artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
    ]
  },

  {
    id: '2',
    title: "Happy Vibes",
    album: [
      {
      id: '1',
      imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
      artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
      id: '2',
      imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
      artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
        id: '3',
        imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
        artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
        id: '4',
        imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
        artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
        id: '5',
        imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
        artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
    ]
  },

  {
    id: '3',
    title: "Made For You",
    album: [
      {
      id: '1',
      imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
      artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
      id: '2',
      imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
      artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
        id: '3',
        imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
        artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
        id: '4',
        imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
        artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
      {
        id: '5',
        imageUri: "https://pub-static.haozhaopian.net/assets/projects/pages/03255bf0-a1ea-11e9-9a70-63e8574a5db9_64e5ec1b-0ed6-43a0-96e6-57a26534a584_thumb.jpg",
        artistHeadLine: "Tylor Swift, Cardi asdkfjsjdl"
      },
    ]
  },
];
  
  
  export default function HomeScreen() {
    return (
      <View style={styles.container}>
        {/* <Album album={album} /> */}
        <FlatList
          data={albumCategory}
          renderItem = {({item}) => <AlbumCategory title={item.title} album={item.album}/>}
          keyExtractor={(item) => item.id}
          
        />
      </View>
    );
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

