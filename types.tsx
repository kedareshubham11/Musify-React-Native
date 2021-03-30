export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  Home: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumP = {
  id: string;
  name: string;
  by: string;
  likes: number;
  imageUri: string;
  artistHeadLine: string;
};

export type AlbumCategoryProps = {
  title: string,
  album: [],
  
};

export type Song = {
  id: string,
  imageUri: string,
  title: string,
  artist: string
}