export interface HandoutInput {
  product: string;
  email: string;
  preference: string;
}

export interface FileUploadResponse {
  ACL: string;
  Bucket: string;
  FileType: string;
  Key: string;
  Location: string;
  Path: string;
  Size: number;
  createdAt: string;
  createdBy: string;
  id: string;
  updatedAt: string;
}

export interface ArticleCreateInput {
  cover: string;
  headLineCover: string;
  thumbNail: string;
  name: string;
  body: string;
}