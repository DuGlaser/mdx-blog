import fs from 'fs';
import path from 'path';
import { FrontMatter } from '@/types/frontmatter';
import { Post } from '@/types/post';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import { generateRss } from '@/utils/rssUtils';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function feed(req: NextApiRequest, res: NextApiResponse) {
  const posts: Post[] = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);
    const d = data as FrontMatter;

    const post: Post = {
      content,
      data: d,
      filePath,
    };

    return post;
  });

  try {
    const feed = generateRss(posts);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.end(feed);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.end();
  }
}
