import React from 'react';

const Tab = ({ index, activeTab, onClick, title }: {
    index: string;
    activeTab: string;
    onClick: any;
    title: string;
}) => {

    const handleClick = () => {
        onClick(index);
    };

    return (
        <button
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={handleClick}
        >
            {title}
        </button>
    );
};

export default Tab;
