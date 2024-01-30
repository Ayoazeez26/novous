import FetchFactory from '../factory';

import {
  RequestTenderInput,
  contactUsInput,
  BookmarkTender,
} from '~/types';

class DataModule extends FetchFactory {
  private RESOURCE = '';

  async getAllProducts(data: string): Promise {
    return await this.call(
      'GET',
      `${this.RESOURCE}/product/search${data}`
    );
  }

  async viewSingleProduct(id: string): Promise {
    return await this.call(
      'GET',
      `${this.RESOURCE}/product/search/${id}`
    );
  }

}

export default DataModule;
