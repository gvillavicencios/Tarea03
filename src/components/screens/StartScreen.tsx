import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IState} from '../../models/IState';
import AlbumList from '../organisms/AlbumList';
import Detail from '../molecules/Detail';

const StartScreen: React.FC = () => {
  const selectedAlbum = useSelector((state: IState) => state.Album.selectedAlbum);
  console.log(selectedAlbum)
  return <View>{selectedAlbum ? <Detail /> : <AlbumList />}</View>;
};

export default StartScreen;