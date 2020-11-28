import fs from 'fs';
import path from 'path';
import Layout from '@/components/Layout';
import PageSEO from '@/components/PageSEO';
import PostItem from '@/components/PostItem';
import { Post } from '@/types/post';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import { config } from 'site.config';

interface Props {
  posts: Post[];
}

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <PageSEO path={''} description={config.meta.description} />
      <ul>
        {posts.map((post) => (
          <PostItem key={post.filePath} post={post} />
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
