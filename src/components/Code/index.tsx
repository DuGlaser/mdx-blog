import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
  className: string;
}

const Code: React.FC<Props> = ({ className, children }) => {
  const language = className.replace('language-', '');
  const content = children?.toString().trim();
  return (
    <div className="my-5">
      <SyntaxHighlighter
        showLineNumbers={true}
        wrapLines={true}
        language={language}
        style={nord}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default React.memo(Code);
