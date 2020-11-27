import parse from 'html-react-parser';
import React from 'react';

interface Props {
  html: string;
}

const Embed: React.FC<Props> = (props) => {
  const html = props.html;
  return <React.Fragment>{parse(html)}</React.Fragment>;
};

export default Embed;
