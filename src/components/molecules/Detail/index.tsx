import React, {useEffect, useMemo} from 'react';
import { Card } from 'react-native-elements'
import {StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import { actualizarSelectedAlbum } from '../../../store/actions/Album';

const Detail: React.FC = () => {
    const dispatch = useDispatch();
    const selectedAlbum = useSelector((state: IState) => state.Album.selectedAlbum); 
    const album = useSelector((state: IState) => state.Album.albums);
    const songs = album[selectedAlbum || 0].details;
 
    const onBackPress = () => {
      dispatch(actualizarSelectedAlbum(null));
    };
      
    return (
        <FlatList  
            data={songs}
            renderItem={({item}) =>               
            <TouchableOpacity onPress={onBackPress}>
              <Card>
                <Card.Title> { item.id } {item.title} </Card.Title>
                <Card.Divider/>
                  <Card.Image source={{uri: item.url}}>                  
                  </Card.Image>
              </Card>     
            </TouchableOpacity>       
          }                
        />
    )    
  };

  const styles = StyleSheet.create({
 
    MainContainer :{        
        flex:1,
        margin: 5,        
    },
     
    imageView: {
     
        width: '50%',
        height: 100 ,
        margin: 7,
        borderRadius : 7
     
    },
     
    textView: {
     
        width:'50%', 
        textAlignVertical:'center',
        padding:10,
        color: '#000'
     
    }
     
    });
  
  export default Detail;
  