/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'fs';
import path from 'path';
import Code from '@/components/Code';
import CustomLink from '@/components/CustomLink';
import Embed from '@/components/Embed';
import { H1, H2, H3, H4 } from '@/components/Heading';
import Iframely from '@/components/Iframely';
import Img from '@/components/Image';
import Layout from '@/components/Layout';
import P from '@/components/Paragraph';
import Share from '@/components/Share';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
// @ts-ignore
import hydrate from 'next-mdx-remote/hydrate';
// @ts-ignore
import renderToString from 'next-mdx-remote/render-to-string';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const components = {
  a: CustomLink,
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  img: Img,
  Img: Img,
  code: Code,
  Embed: Embed,
  Head,
};

const PostPage = ({ source, frontMatter }: any) => {
  const content = hydrate(source, { components });
  const [shareUrl, setShareUrl] = useState('');
  useEffect(() => {
    if (window) {
      setShareUrl(window.location.href);
    }
  }, []);

  return (
    <Layout>
      <Iframely />
      <div>
        <h1 className="text-4xl font-black tracking-wide text-center text-gray-900 md:text-5xl">
          {frontMatter.title}
        </h1>
        <div className="flex flex-row justify-center p-1 ">
          {frontMatter.tags.map((tag: string) => (
            <div key={tag} className="mr-2 text-sm text-gray-600">
              <span className="text-opacity-50">#</span>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <main className="w-full px-6 pb-4 mx-auto mt-3 bg-white border border-gray-400 rounded-lg md:px-8 md:pb-4 sm:pb-3">
        {content}
      </main>
      <Share url={shareUrl} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
