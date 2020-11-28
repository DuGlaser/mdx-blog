import React from 'react';
import {
  PocketIcon,
  PocketShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

interface Props {
  url: string;
  title: string;
}

const Share: React.FC<Props> = (props) => {
  const { url, title } = props;

  return (
    <div className="flex mt-8">
      <TwitterShareButton url={url} title={title} className="mr-3">
        <TwitterIcon size={40} />
      </TwitterShareButton>
      <PocketShareButton url={url} title={title} className="mr-3">
        <PocketIcon size={40} />
      </PocketShareButton>
    </div>
  );
};

export default Share;
