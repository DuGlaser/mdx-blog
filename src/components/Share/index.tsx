import React from 'react';
import {
  PocketIcon,
  PocketShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

interface Props {
  url: string;
}

const Share: React.FC<Props> = (props) => {
  const url = props.url;

  return (
    <div className="flex mt-8">
      <TwitterShareButton url={url} className="mr-3">
        <TwitterIcon size={40} />
      </TwitterShareButton>
      <PocketShareButton url={url} className="mr-3">
        <PocketIcon size={40} />
      </PocketShareButton>
    </div>
  );
};

export default Share;
