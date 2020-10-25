import fs from 'fs';
import path from 'path';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

const Index = ({ posts }: any) => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>
        Click the link below to navigate to a page generated by{' '}
        <code>next-mdx-remote</code>.
      </p>
      <ul>
        {posts.map((post: any) => (
          <li key={post.filePath}>
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
            >
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
};

export default Index;
