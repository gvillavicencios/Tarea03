import IDetail from './IDetail';
export default interface IAlbum {
  userId: number;
  id: number;
  title: string;  
  details?: IDetail[];
}