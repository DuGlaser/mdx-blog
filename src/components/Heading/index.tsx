export const H1: React.FC = ({ children }) => {
  return (
    <h1 className="mb-1 text-3xl font-black tracking-wide text-gray-900 md:text-4xl">
      {children}
    </h1>
  );
};

export const H2: React.FC = ({ children }) => {
  return (
    <h2 className="mt-10 mb-1 text-2xl font-black text-gray-900 md:text-3xl">
      {children}
    </h2>
  );
};

export const H3: React.FC = ({ children }) => {
  return (
    <h3 className="mt-10 mb-1 text-xl font-black text-gray-900 md:text-2xl">
      {children}
    </h3>
  );
};

export const H4: React.FC = ({ children }) => {
  return (
    <h4 className="mt-10 mb-1 text-lg font-black text-gray-900 md:text-xl">
      {children}
    </h4>
  );
};
