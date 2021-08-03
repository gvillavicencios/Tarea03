import React, {FC} from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Card } from 'react-native-elements'
import {useDispatch} from 'react-redux';
import IAlbum from '../../../models/IAlbum';
import {actualizarSelectedAlbum} from '../../../store/actions/Album';

export interface AlbumItemProps {
  Album: IAlbum;
  index: number;
}

const AlbumItem: FC<AlbumItemProps> = ({Album, index}) => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(actualizarSelectedAlbum(Album.id));
  };
      return (
      <TouchableOpacity onPress={onPress}>
        <Card>
        <Card.Title> {Album.title} </Card.Title>
        <Card.Divider/>
           <Card.Image source={{ uri: Album.details != null? Album.details[0].thumbnailUrl : "" }}>           
           </Card.Image>
        </Card>     
      </TouchableOpacity>
  );  
};

export default AlbumItem;