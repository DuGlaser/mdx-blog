import React from 'react';

interface Props {
  type: string;
}

const First: React.FC<Props> = (props) => {
  const { type } = props;

  if (type === 'CustomButton') {
    return (
      <button
        className="px-4 py-2 mb-3 font-semibold bg-transparent border rounded text-blue-dark"
        onClick={() => alert('CustomButton')}
      >
        CustomButton
      </button>
    );
  }

  return <div></div>;
};

export default First;
