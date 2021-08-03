import {IAction} from '../../../models/IAction';
import IDetail from '../../../models/IDetail';
import {CARGAR_DETALLE} from '../../actions';

export interface IDetailState {
  detalle: IDetail[];  
}

const initialState: IDetailState = {
  detalle: [],  
};

export default (state = initialState, {type, payload}: IAction) => {
  switch (type) {
    case CARGAR_DETALLE:
      return {...state, users: payload as IDetail[]};
    default:
      return state;
  }
};