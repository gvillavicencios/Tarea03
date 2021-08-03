import IAlbum from './IAlbum';
import IDetail from './IDetail';

export interface IAction {
    type: string;
    payload?: string | number | IAlbum[] | IDetail[];
  }
  