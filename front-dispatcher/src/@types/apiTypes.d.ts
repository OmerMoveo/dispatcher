declare namespace APITypes {
  interface ApiResponseData {
    articles: Article[];
    status: string;
    totalResults: number;
  }
  interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: Date;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
  }
}