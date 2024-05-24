import {UserModel} from './user.model';
import {Page, Links} from './pagination.model';

export interface UserpageresponseModel {
  page: Page
  _embedded: {'userDTOList': UserModel[]}
  _links: Links
}
