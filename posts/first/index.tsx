import React from 'react';

interface Props {
  type: string;
}

const First: React.FC<Props> = (props) => {
  const { type } = props;

  if (type === 'CustomButton') {
    return (
      <button
        style={{
          marginBottom: '1rem',
          border: '2px solid #ccc',
          borderRadius: '4px',
          padding: '4px 8px',
        }}
        onClick={() => alert('CustomButton')}
      >
        CustomButton
      </button>
    );
  }

  return <div></div>;
};

export default First;
