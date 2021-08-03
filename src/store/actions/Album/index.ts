import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {CARGAR_ALBUMS, ACTUALIZAR_SELECTED_ALBUM} from '..';
import {IAction} from '../../../models/IAction';
import {IState} from '../../../models/IState';
import IAlbum from '../../../models/IAlbum';
import IDetail from '../../../models/IDetail';

export const cargarAlbums = (payload: IAlbum[]) => ({
  type: CARGAR_ALBUMS,
  payload,
});

export const actualizarSelectedAlbum = (payload: number | null) => ({
  type: ACTUALIZAR_SELECTED_ALBUM,
  payload,
});

export const fetchAlbums =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const albumResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      ); 
      
      const fotosResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );      

      const albums = (albumResponse.data as IAlbum[]).map(album => ({
        ...album,
        details: (fotosResponse.data as IDetail[]).filter(
          detail => detail.albumId === album.id,
        ),
      }));      
      dispatch(cargarAlbums(albums));      
    } catch (error) {
      console.error(error);
    }
  };