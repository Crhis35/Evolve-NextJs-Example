export interface IPost {
  title: string;
  id: string;
  image: IImage;
}
export interface IImage {
  _typename?: string;
  url: string;
}
export class Image implements IImage {
  _typename: string;
  url: string;
}
export interface DataPost {
  posts: IPost[];
}

export interface IData {
  data: DataPost;
  fetchMore: any;
}

export class Post implements IPost {
  title: string;
  id: string;
  image: IImage;
  constructor(title: string, id: string, image: IImage) {
    this.title = title;
    this.id = id;
    this.image = image;
  }
}
