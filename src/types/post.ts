import { FrontMatter } from '@/types/frontmatter';

export interface Post {
  content: string;
  data: FrontMatter;
  filePath: string;
}
