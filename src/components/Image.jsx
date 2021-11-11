import NextImage from "next/image";

const Image = ({ alt, children, ...props }) => (
  <NextImage alt={alt} {...props}>
    {children}
  </NextImage>
);

export default Image;
