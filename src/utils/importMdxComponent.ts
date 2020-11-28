import dynamic from 'next/dynamic';

interface Component {
  [key: string]: any;
}

export const importMdxComponent = (component: Component, postName: string) => {
  const d = dynamic(() => import(`../../posts/${postName}/index.tsx`));
  component[postName] = d;

  return component;
};
