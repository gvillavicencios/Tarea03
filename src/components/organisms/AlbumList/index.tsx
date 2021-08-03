import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import IAlbum from '../../../models/IAlbum';
import {actualizarSelectedAlbum, fetchAlbums} from '../../../store/actions/Album';
import AlbumItem from '../../molecules/AlbumItem';

const AlbumList: React.FC = () => {
  const myAlbums = useSelector((state: IState) => state.Album.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());    
  }, []);

  return (
    
    <View>      
      {myAlbums.length > 0 ? (        
        <FlatList
          data={myAlbums}
          renderItem={({item, index}) => (
            <AlbumItem key={item.id} Album={item} index={index} />
          )}
        />
      ) : (
        <ActivityIndicator color="green" />
      )}
    </View>
  );
};

export default AlbumList;
