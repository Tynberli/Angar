import React, { useState } from 'react';
import Tab from './Tab';
import tabData from './tabData'; // Подключаем файл с данными для табов

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs">
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            index={index}
            activeTab={activeTab}
            onClick={handleTabClick}
            title={tab.title}
          />
        ))}
      </div>
      <div className="tab-content">
        <img src={tabData[activeTab].image} alt={tabData[activeTab].title} />
        <p>{tabData[activeTab].text}</p>
      </div>
    </div>
  );
};

export default TabSection;
