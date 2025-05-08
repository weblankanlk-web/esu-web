import React from "react";
import "./style.scss";
import Image from "next/image";

interface InnerBannerProps {
  innerPageTitle: string;
  innerPageDescription: string;
  innerBgDesk: string;
  innerBgMobi: string;
}
const InnerBanner: React.FC<InnerBannerProps> = ({
  innerPageTitle,
  innerPageDescription,
  innerBgDesk,
  innerBgMobi,
}) => {

  return (

    <section className="inner-banner position-relative">
      <div className="full-wrap">
        <div className="inner-banner-image">
            <picture>
            <source srcSet={innerBgDesk} media="(min-width: 992px)" />
            <source srcSet={innerBgMobi} media="(max-width: 991px)" />
              <img src={innerBgMobi} className="d-block w-100" alt={innerPageTitle.replace(/<\/?[^>]+(>|$)/g, "")} />
            </picture>
          
        </div>
        <div className="inner-banner-content">
          <h1 dangerouslySetInnerHTML={{ __html: innerPageTitle }}></h1>
          <div>{innerPageDescription}</div>
        </div>
    </div>
    </section>
  );
};

export default InnerBanner;
