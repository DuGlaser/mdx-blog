/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'fs';
import path from 'path';
import Code from '@/components/Code';
import CustomLink from '@/components/CustomLink';
import { H1, H2, H3, H4 } from '@/components/Heading';
import Iframely from '@/components/Iframely';
import Img from '@/components/Image';
import Layout from '@/components/Layout';
import PageSEO from '@/components/PageSEO';
import P from '@/components/Paragraph';
import Share from '@/components/Share';
import { FrontMatter } from '@/types/frontmatter';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// @ts-ignore
import hydrate from 'next-mdx-remote/hydrate';
// @ts-ignore
import renderToString from 'next-mdx-remote/render-to-string';
import Head from 'next/head';
import { config } from 'site.config';

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
  Iframely: Iframely,
  Head,
};

interface Props {
  postName: string;
  frontMatter: FrontMatter;
  source: any;
}

const PostPage: NextPage<Props> = (props) => {
  const { postName, frontMatter, source } = props;

  const content = hydrate(source, { components });
  const pageUrl = `/posts/${postName}`;

  const date = new Date(frontMatter.pubDate);
  const localDate = date.toLocaleDateString();
  // const day = localDate.getUTCDate();
  // const month = date.getUTCMonth() + 1;
  // const year = date.getUTCFullYear();

  return (
    <Layout>
      <PageSEO
        path={pageUrl}
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <div>
        <h1 className="text-4xl font-black tracking-wide text-center text-gray-900 md:text-5xl">
          {frontMatter.title}
        </h1>
        <div className="flex flex-row justify-center m-1 text-sm text-gray-600">
          {localDate}
        </div>
        <div className="flex flex-row justify-center p-1 ">
          {frontMatter.tags.map((tag: string) => (
            <div key={tag} className="mr-2 text-sm text-gray-600">
              <span className="text-opacity-50">#</span>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <main className="w-full px-6 py-6 mx-auto mt-3 bg-white border border-white rounded-lg md:px-8 md:py-10">
        {content}
      </main>
      <Share url={config.root + pageUrl} title={frontMatter.title} />
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
      postName: params.slug,
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
