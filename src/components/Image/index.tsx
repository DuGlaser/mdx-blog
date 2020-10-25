interface Props {
  src: string;
  title?: string;
  alt?: string;
  isCenter?: boolean;
}

const Img: React.FC<Props> = (props) => {
  const { src, title, alt, isCenter } = props;
  return (
    <img
      className={isCenter ? 'mx-auto' : ''}
      src={src}
      alt={alt}
      title={title}
    />
  );
};

export default Img;
