import { Post } from '@/types/post';

const generateRssItem = (post: Post) => {
  return `<item>
    <guid>https://emilioschepis.com/posts/${post.filePath.replace(
      /\.mdx?$/,
      ''
    )}</guid>
    <title>${post.data.title}</title>
    <link>https://emilioschepis.com/posts/${post.filePath.replace(
      /\.mdx?$/,
      ''
    )}</link>
    <description>${post.data.description}</description>
    <pubDate>${post.data.pubDate}</pubDate>
  </item>`;
  // <pubDate>${new Date(post.data.pubDate).toUTCString()}</pubDate>
};

export const generateRss = (posts: Post[]) => {
  return `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>永遠にWIP</title>
      <link>https://duglaser.dev</link>
      <language>ja</language>
      ${posts.map((post) => {
        return generateRssItem(post);
      })}
    </channel>
  </rss>`;
};
