import React, { useState } from 'react';
import Image from "next/image";
import Button from "../Button/Button";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";

interface Tabs {
    ImgDesk: string;
    ImgMob: string;
    ImgLogo: string;
    title: string;
    id:string;
    text:string;
}

interface TabsWithImagesProps {
    tabData: Tabs[];   
}

const TabsWithImages: React.FC<TabsWithImagesProps> = ({ tabData }) => {
    const [activeTab, setActiveTab] = useState(tabData[0]?.id || '');
    const [search, setSearch] = useState("");
    const { color } = useTheme();

  return (
    <div className="tab-section">
      <div className="tab-content mt-3 border p-3 rounded">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
          >
             <div className="banner-item">
        <div className="image-container">
          <picture>
            <source srcSet={tab?.ImgDesk} media="(min-width: 992px)" />
            <source srcSet={tab?.ImgMob} media="(max-width: 991px)" />
            <img
              src={tab?.ImgDesk || tab?.ImgMob}
              className="d-block w-100"
              alt="Image"
            />
          </picture>
        </div>
        <div className="detail-container">
          <div className="detail-wrap">
            <Image src={tab?.ImgLogo} width={900} height={850} alt="" />
            <div className="home-content">
              <p>{tab?.text}</p>
            </div>
            <div className="search-wrapper">
              <div className="search-form-ajax">
                <input
                  type="text"
                  name="search-keyword"
                  className="type-check"
                  placeholder="Search Courses"
                  id="search-key"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button id="search-form-ajax-submit" type="submit">
                  <Image
                    src="/images/search-white.png"
                    width={20}
                    height={20}
                    alt="search"
                  />
                </button>
              </div>
              <div className="button">
                <Button
                  buttonName="Register Online"
                  buttonUrl="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        ))}
      </div>

      <ul className="nav nav-tabs">
        {tabData.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                backgroundColor: activeTab === tab.id ? color : 'rgba(186, 186, 186, 0.65)',
                }}
                dangerouslySetInnerHTML={{ __html: tab.title }}
            />
          </li>
        ))}
      </ul>

    </div>
  );
};

export default TabsWithImages;
