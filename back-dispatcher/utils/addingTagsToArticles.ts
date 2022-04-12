import { INewsApiArticle, INewsApiResponse } from "ts-newsapi/lib/types";
import {
  disasterTag,
  healthTag,
  moneyTag,
  politicsTag,
  sportTag,
  tagsKeywords,
  techTag,
  ViolenceTag,
} from "../constants/strings/strings";
import { ArticleWithTags, Tags } from "../types/newsTypes";

export const addingTagsToArticles = (apiResponse: INewsApiResponse) => {
  if (!apiResponse.totalResults && !apiResponse.articles.length)
    return apiResponse;
  const updatedArticles = apiResponse.articles.map((article) =>
    addTagsToArticle(article)
  );
  const { totalResults, status } = apiResponse;
  return { status, totalResults, articles: updatedArticles };
};

const addTagsToArticle = (article: INewsApiArticle): ArticleWithTags => {
  const { description, content, title } = article;

  const descriptionTags = description ? getTagsByString(description) : [];
  const contentTags = content ? getTagsByString(content) : [];
  const titleTags = title ? getTagsByString(title) : [];
  const combinedTags = descriptionTags.concat(contentTags).concat(titleTags);
  const tags = combinedTags.length
    ? uniqueValuesInTags(combinedTags)
    : combinedTags;
  return { ...article, tags };
};

const getTagsByString = (articleString: string) => {
  const tags: Tags = [];
  const lowerCaseArticleString = articleString.toLowerCase();
  if (!articleString) return tags;
  if (tagsKeywords.Money.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(moneyTag);
  if (tagsKeywords.Health.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(healthTag);
  if (tagsKeywords.Disaster.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(disasterTag);
  if (tagsKeywords.Politics.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(politicsTag);
  if (tagsKeywords.Sport.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(sportTag);
  if (tagsKeywords.Tech.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(techTag);
  if (tagsKeywords.Violence.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(ViolenceTag);
  return tags;
};

const uniqueValuesInTags = (tags: Tags) => {
  return [...new Set(tags)];
};