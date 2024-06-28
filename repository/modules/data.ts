import FetchFactory from '../factory';

import type {
  HandoutInput,
  FileUploadResponse,
  ArticleCreateInput,
} from '~/types';

class DataModule extends FetchFactory {
  private RESOURCE = "";

  async getJobOpenings(): Promise {
    return await this.call("GET", `${this.RESOURCE}/jobs`);
  }

  async getAllArticles(): Promise {
    return await this.call("GET", `${this.RESOURCE}/article/search?limit=100`);
  }

  async getSingleArticle(id: string): Promise {
    return await this.call("GET", `${this.RESOURCE}/article/search?id[0]=${id}`);
  }

  async viewSingleProduct(id: string): Promise {
    return await this.call("GET", `${this.RESOURCE}/product/view/${id}`);
  }

  async downloadHandout(productDetails: HandoutInput): Promise {
    return await this.call(
      "PATCH",
      `${this.RESOURCE}/product/download-count`,
      productDetails
    );
  }

  async uploadDocument(credentials: FormData): Promise<FileUploadResponse> {
    return await this.call<FileUploadResponse>(
      "POST",
      `${this.RESOURCE}/file/upload-document`,
      credentials
    );
  }

  async createArticle(credentials: ArticleCreateInput): Promise {
    return await this.call(
      "POST",
      `${this.RESOURCE}/article/create`,
      credentials
    );
  }

  async getFeaturedProducts(): Promise {
    return await this.call(
      "GET",
      `${this.RESOURCE}/product/featured-publications`
    );
  }
}

export default DataModule;
