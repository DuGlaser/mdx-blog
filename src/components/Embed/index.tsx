import parse from 'html-react-parser';
import React from 'react';

interface Props {
  html: string;
}

const Embed: React.FC<Props> = (props) => {
  const html = props.html;
  return <div className="my-3">{parse(html)}</div>;
};

export default Embed;
