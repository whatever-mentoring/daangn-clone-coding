export type ArticlesData = {
    articleId: number;
    thumbnailImg: string;
    title: string;
    subTitle: string;
    categories: string[];
}

export type DetailArticleData = {
    title: string;
    thumbnailImg: string;
    createdAt: string;
    content: string;
}