import FetchFactory from '../factory';

import {
  HandoutInput,
} from '~/types';

class DataModule extends FetchFactory {
  private RESOURCE = "";

  async getAllProducts(data: string): Promise {
    return await this.call("GET", `${this.RESOURCE}/product/search${data}`);
  }

  async viewSingleProduct(id: string): Promise {
    return await this.call("GET", `${this.RESOURCE}/product/search/${id}`);
  }

  async downloadHandout(productDetails: HandoutInput): Promise {
    return await this.call(
      "PATCH",
      `${this.RESOURCE}/product/download-count`,
      productDetails
    );
  }
}

export default DataModule;
