export interface PortfolioBLock {}
export interface Portfolio {
  id: string;
  title: string;
  description: string;
  img: string;
  views: number;
  createdAt: string;
  userId: string;
  blocks: PortfolioBLock[];
}
