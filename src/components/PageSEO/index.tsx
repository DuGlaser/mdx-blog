import Head from 'next/head';
import { config } from 'site.config';

interface Props {
  path: string;
  title?: string;
  description?: string;
  image?: string;
}

const PageSEO: React.FC<Props> = (props) => {
  const { title, path, description, image } = props;
  const pageUrl = `${config.root}${path}`;

  return (
    <Head>
      <title>{title ? title : config.meta.title}</title>

      <meta property="og:title" content={title} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site" content={config.meta.title} />
      {!!image && <meta property="og:image" content={image} />}
      {!!description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      <link rel="canonical" href={pageUrl} />
    </Head>
  );
};

export default PageSEO;
