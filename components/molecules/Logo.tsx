import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/assets/images/riguruku-logo.svg"
      alt="riguruku logo"
      width={150}
      height={48}
      className="object-contain"
    ></Image>
  );
};

export default Logo;
