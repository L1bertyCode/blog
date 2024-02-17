import { User } from "@/entities/User";

export const ArticleBlockType = {
 TEXT: "TEXT",
 CODE: "CODE",
 IMAGE: "IMAGE",
} as const;
export interface ArticleBaseBlock {
 id: string;
 type: (typeof ArticleBlockType)[keyof typeof ArticleBlockType];
}
export interface ArticleCodeBlock extends ArticleBaseBlock {
 type: "CODE";
 code: string;
}
export interface ArticleImageBlock
 extends ArticleBaseBlock {
 type: "IMAGE";
 src: string;
 title: string;
}
export interface ArticleTextBlock extends ArticleBaseBlock {
 type: "TEXT";
 paragraphs: string[];
 title?: string;
}
export type ArticleBlock =
 | ArticleCodeBlock
 | ArticleImageBlock
 | ArticleTextBlock;
export const ArticleType = {
 IT: "IT",
 SCIENCE: "SCIENCE",
 ECONIMIC: "ECONIMIC",
} as const;

export enum ArticleView {
 BIG = "BIG",
 SMALL = "SMALL",
}
export interface Article {
 id: string;
 title: string;
 user: User;
 subtitle: string;
 img: string;
 views: number;
 createdAt: string;
 userId: string;
 type: (typeof ArticleType)[keyof typeof ArticleType][];
 blocks: ArticleBlock[];
}
