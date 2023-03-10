// This file contains TypeScript types used throught the project

export interface Post {
  id: number;
  name: string;
  content: string;
  signature?: string;
  time: number;
  hasPaid: boolean;
}
