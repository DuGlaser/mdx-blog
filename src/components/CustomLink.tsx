import Link from 'next/link';

interface Props {
  as?: string;
  href: string;
}

const CustomLink: React.FC<Props> = ({ as, href, children }) => {
  return (
    <>
      <Link as={as} href={href}>
        <a>{children}</a>
      </Link>
      <style jsx>{`
        a {
          color: tomato;
        }
      `}</style>
    </>
  );
};

export default CustomLink;
