import {IAction} from '../../../models/IAction';
import IAlbum from '../../../models/IAlbum';
import {CARGAR_ALBUMS, ACTUALIZAR_SELECTED_ALBUM} from '../../actions';

export interface IAlbumState {
  albums: IAlbum[];
  selectedAlbum: number | null;
}

const initialState: IAlbumState = {
  albums: [],
  selectedAlbum: null,
};

export default (state = initialState, {type, payload}: IAction) => {
  switch (type) {
    case CARGAR_ALBUMS:      
      return {...state, albums: payload as IAlbum[]};

    case ACTUALIZAR_SELECTED_ALBUM:
      return {...state, selectedAlbum: payload as number | null};

    default:
      return state;
  }
};