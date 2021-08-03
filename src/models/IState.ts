import {IAlbumState} from '../store/reducers/Album';
import {IDetailState} from '../store/reducers/Detail';


export interface IState {
  Album: IAlbumState;
  Detail: IDetailState;
}
