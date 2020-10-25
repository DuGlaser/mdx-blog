import Link from 'next/link';

const CustomLink = ({ as, href, ...otherProps }: any) => {
  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
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
