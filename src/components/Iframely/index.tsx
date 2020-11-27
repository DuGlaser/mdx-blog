import Head from 'next/head';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    iframely: any;
  }
}

const Iframely: React.FC = () => {
  useEffect(() => {
    if (window && window.iframely) {
      window.iframely.load();
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <script
          src="//cdn.iframe.ly/embed.js?iframe=1&omit_script=1"
          async
        ></script>
      </Head>
    </React.Fragment>
  );
};

export default Iframely;
