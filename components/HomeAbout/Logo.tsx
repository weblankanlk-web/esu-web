import React from "react";
import Image from "next/image";

interface Logo {
  imageUrl: string;
}

const Logo: React.FC<{ logoData: Logo }> = ({
    logoData,
}) => {
  return (
    <>
      <div id="logo-item">
        <div className="l-item-inner">
             <Image
                src={logoData.imageUrl}
                width={256}
                height={85}
                alt=""
            />
        </div>
      </div>
    </>
  );
};

export default Logo;
