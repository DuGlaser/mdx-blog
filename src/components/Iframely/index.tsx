import React, { useEffect } from 'react';
import Embed from '../Embed';

declare global {
  interface Window {
    iframely: any;
  }
}

interface Props {
  html: string;
}

const Iframely: React.FC<Props> = (props) => {
  useEffect(() => {
    if (window.iframely) {
      window.iframely.load();
    }
  }, []);

  return <Embed html={props.html} />;
};

export default Iframely;
